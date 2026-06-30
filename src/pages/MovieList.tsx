import { MovieCard } from "../components";
import { useFetch } from "../hooks/useFetch";
import { usePageTitle } from "../hooks/usePageTitle";

export interface MovieListProps {
  apiTargetPath: string;
  title: string;
}

export const MovieList: React.FC<MovieListProps> = ({
  apiTargetPath,
  title,
}: MovieListProps) => {
  const { data: movies } = useFetch(apiTargetPath);
  const setDocumentTitle = usePageTitle(title);
  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-center lg:justify-start flex-wrap gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movieData={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
