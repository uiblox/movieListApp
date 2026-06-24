import { Link } from "react-router";

export const MovieCard = ({ movieData }: { movieData: any }) => {
  console.log("what is movie data", movieData.title);
  return (
    <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs dark:border-gray-100">
      <Link to={`/movie/${movieData.id}`}>
        <img
          className="rounded-base"
          src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
          alt=""
        />
      </Link>
      <Link to={`/movie/${movieData.id}`}>
        <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading dark:text-white">
          {movieData.title}
        </h5>
      </Link>
      <p className="mb-6 text-body dark:text-white">{movieData.overview}</p>
    </div>
  );
};
