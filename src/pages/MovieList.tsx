import { MovieCard } from "../components";
import { useFetch } from "../hooks/useFetch";

interface MovieListProps {
  apiTargetPath: string;
}

export const MovieList: React.FC<MovieListProps> = ({
  apiTargetPath,
}: MovieListProps) => {
  const { data: movies } = useFetch(apiTargetPath);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center lg:justify-start flex-wrap gap-4">
          {movies.length
            ? movies.map((movie) => (
                <MovieCard key={movie.id} movieData={movie} />
              ))
            : "no movies"}
        </div>
      </section>
    </main>
  );
};
