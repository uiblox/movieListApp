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
    async function fetchMovies() {
      const fetchResponse = await fetch(url);
      const jsonResponse = await fetchResponse.json();
      setData((jsonResponse.results ?? []) as T[]);
    }
    fetchMovies();
  }, [url]);

  return { data };
};
