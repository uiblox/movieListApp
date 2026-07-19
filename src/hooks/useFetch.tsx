import { useEffect, useRef, useState } from "react";

export interface Movie {
  id: number;
  poster_path: string;
  title: string;
  overview: string;
}

export const useFetch = <T,>(
  apiTargetPath: string,
  queryTerms: string | null = "",
) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setError] = useState(false);
  const movie_key = import.meta.env.VITE_API_KEY;
  const normalizedQuery = queryTerms ?? "";
  const url = `https://api.themoviedb.org/3/${apiTargetPath}?api_key=${movie_key}&query=${normalizedQuery}`;

  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    async function fetchMovies() {
      controllerRef.current?.abort();
      controllerRef.current = new AbortController();
      setIsLoading(true);

      try {
        const fetchResponse = await fetch(url, {
          signal: controllerRef.current.signal,
        });
        const jsonResponse = await fetchResponse.json();
        setData((jsonResponse.results ?? []) as T[]);
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === "AbortError") {
          // ignore state updates if the fetch was aborted
          return;
        }
        console.error(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovies();

    return () => {
      controllerRef.current?.abort();
    };
  }, [url]);

  return { data, isLoading, isError };
};
