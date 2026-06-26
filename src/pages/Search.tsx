import { useSearchParams } from "react-router";
import { MovieCard } from "../components";
import { useFetch } from "../hooks/useHooks";

interface MovieListProps {
  apiTargetPath: string;
}

export const Search: React.FC<MovieListProps> = ({
  apiTargetPath,
}: MovieListProps) => {
  const [searchParams] = useSearchParams();
  const queryTerms = searchParams.get("q");

  const { data: movies } = useFetch(apiTargetPath, queryTerms);

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
