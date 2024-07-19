import { Card } from "../components/Card";
import "./MoviesList.css";
import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useEffect(() => {
    document.title = `${title} / ATOZ-Movies`;
  });
  return (
    <main>
      <section className="main-list-container">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  );
};
