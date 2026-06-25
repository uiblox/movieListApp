import { Routes, Route } from "react-router";
import { MovieList, MovieItem, NotFound404, Search } from "../pages/Index";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MovieList apiTargetPath="movie/now_playing" />}
        />
        <Route path="/movie/:id" element={<MovieItem />} />
        <Route
          path="/movies/popular"
          element={<MovieList apiTargetPath="movie/popular" />}
        />
        <Route
          path="/movies/top"
          element={<MovieList apiTargetPath="movie/top_rated" />}
        />
        <Route
          path="/movies/upcoming"
          element={<MovieList apiTargetPath="movie/upcoming" />}
        />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
};
