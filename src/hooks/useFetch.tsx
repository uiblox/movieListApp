import { useState, useEffect } from "react";

export const useFetch = (apiTargetPath: string, queryTerms: string = "") => {
  const [data, setData] = useState([]);
  const movie_key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/${apiTargetPath}?api_key=${movie_key}&query=${queryTerms}`;

  useEffect(() => {
    async function fetchMovies() {
      const fetchResponse = await fetch(url);
      const jsonResponse = await fetchResponse.json();
      setData(jsonResponse.results);
    }
    fetchMovies();
  }, [url]);

  return { data };
};
