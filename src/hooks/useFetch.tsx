import { useState, useEffect } from "react";

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
  const movie_key = import.meta.env.VITE_API_KEY;
  const normalizedQuery = queryTerms ?? "";
  const url = `https://api.themoviedb.org/3/${apiTargetPath}?api_key=${movie_key}&query=${normalizedQuery}`;

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        const fetchResponse = await fetch(url, {
          signal: controller.signal,
        });
        const jsonResponse = await fetchResponse.json();
        setData((jsonResponse.results ?? []) as T[]);
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === "AbortError") {
          // ignore state updates if the fetch was aborted
          return;
        }
        console.error(err);
      }
    }
    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data };
};
