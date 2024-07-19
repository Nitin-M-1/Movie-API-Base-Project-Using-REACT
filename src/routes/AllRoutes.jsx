import { Routes, Route } from "react-router-dom";
import { MovieList, MoviesDetail, Search, PageNotFound } from "../pages";
export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<MovieList apiPath="movie/now_playing" title="Home" />}
        ></Route>
        <Route path="/movie/:id" element={<MoviesDetail />}></Route>
        <Route
          path="/movies/popular"
          element={<MovieList apiPath="movie/popular" title="Popular" />}
        ></Route>
        <Route
          path="/movies/top"
          element={<MovieList apiPath="movie/top_rated" title="Top Rated" />}
        ></Route>
        <Route
          path="/movies/upcoming"
          element={<MovieList apiPath="movie/upcoming" title="Upcoming" />}
        ></Route>
        <Route
          path="search"
          element={<Search apiPath="search/movie" />}
        ></Route>
        <Route
          path="*"
          element={<PageNotFound />}
          title="Page Not Found"
        ></Route>
      </Routes>
    </>
  );
};
