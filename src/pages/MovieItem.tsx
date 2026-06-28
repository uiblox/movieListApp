import { useParams } from "react-router";
import { useEffect, useState } from "react";

interface MovieDetails {
  title: string;
  poster_path: string;
  overview: string;
  genres: { id: number; name: string }[];
  vote_average: string;
  vote_count: string;
  run_time: string;
  budget: string;
  runtime: string;
  revenue: string;
  release_date: string;
  imdb_id: string;
}

export const MovieItem = () => {
  const [data, setData] = useState<MovieDetails | null>(null);
  const params = useParams();
  const movieIdentifer = params.id;
  const movie_key = import.meta.env.VITE_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/${movieIdentifer}}?api_key=${movie_key}`;

  console.log(movieIdentifer);

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(url);
      const movieData = await response.json();
      console.log(movieData);
      setData(movieData);
    }
    fetchMovie();
  }, [url]);

  return (
    <main>
      <section className="flex justify-around flex-wrap py-5">
        <div className="max-w-sm">
          <img
            className="rounded"
            src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
            alt={data?.title ?? "Movie poster"}
          />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg dark:text-white">
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {data?.title}
          </h1>
          <p className="my-4">{data?.overview}</p>
          <p className="text-center lg:text-left my-4">
            {data?.genres
              ? data?.genres.map((genre) => (
                  <span
                    className="mr-4 p-2 border text-gray-700 dark:border-white dark:text-white rounded"
                    key={genre.id}
                  >
                    {genre.name}
                  </span>
                ))
              : ""}
          </p>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
            </svg>
            <p className="ml-2 text-gray-700 dark:text-white">
              {data?.vote_average}
            </p>
            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full"></span>
            <span className="text-gray-700 dark:text-white">
              {data?.vote_count} reviews
            </span>
          </div>
          <p className="my-4">
            <span className="mr-2 font-bold">Runtime:</span>
            <span className="mr-2">{data?.runtime} min.</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Budget:</span>
            <span className="mr-2">{data?.budget}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Revenue:</span>
            <span className="mr-2">{data?.revenue}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">Release Date:</span>
            <span className="mr-2">{data?.release_date}</span>
          </p>
          <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <span className="mr-2">{data?.imdb_id}</span>
          </p>
        </div>
      </section>
    </main>
  );
};
