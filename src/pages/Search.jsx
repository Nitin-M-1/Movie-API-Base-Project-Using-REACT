import { useFetch } from "../hooks/useFetch";
import { Card } from "../components/Card";
import "./Search.css";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
export const Search = ({ apiPath }) => {
  const [SearchParams] = useSearchParams();
  const queryTerm = SearchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);
  useEffect(() => {
    document.title = `Search Result For ${queryTerm} / ATOZ-Movies`;
  });
  return (
    <main>
      <h2 className="search-title">
        {movies.length === 0
          ? `No result found for '${queryTerm}'`
          : `Result For '${queryTerm}'`}
        ;
      </h2>
      <section className="main-list-container">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </section>
    </main>
  );
};
