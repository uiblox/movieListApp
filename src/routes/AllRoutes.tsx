import { Routes, Route } from "react-router";
import { MovieList, MovieItem, NotFound404, Search } from "../pages/Index";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieItem />} />
        <Route path="/movies/popular" element={<MovieList />} />
        <Route path="/movies/top" element={<MovieList />} />
        <Route path="/movies/upcoming" element={<MovieList />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
};
