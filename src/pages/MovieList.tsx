import { useEffect, useState } from "react";
import { MovieCard } from "../components";

interface MovieType {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  title: string;
  original_language: string;
  original_title: string;
}

export const MovieList = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  const movie_key = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    async function fetchMovies() {
      const fetchResponse = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${movie_key}`,
      );
      const data = await fetchResponse.json();
      console.log(data);
      setMovies(data.results);
    }
    fetchMovies();
  }, []);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center lg:justify-start flex-wrap gap-4">
          {movies.length
            ? movies.map((movie) => {
                console.log("this is the moveie", movie.title);
                return <MovieCard key={movie.id} movieData={movie} />;
              })
            : "no movies"}
        </div>
      </section>
    </main>
  );
};
