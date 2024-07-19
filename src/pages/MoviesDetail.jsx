import "./moviesDetails.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export const MoviesDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    document.title = `${movie.title} / ATOZ-Movies`;
  });
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `  https://api.themoviedb.org/3/movie/${params.id}?api_key=c54aac08d3a66261e65cde11dbce537c&language=en-US&page=1`
      );
      const json = await response.json();
      setMovie(json);
    }
    fetchMovie();
  }, []);

  return (
    <main>
      <section className="movies-details-container">
        <div className="movie-poster-container">
          <img
            className="movie-poster"
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : "https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
          />
        </div>
        <div className="movie-detail-container">
          <h1 className="movie-Name">{movie.title}</h1>
          <p>{movie.overview}</p>

          <div className="review-star-container">
            <i className="bx bxs-star star"></i>
            <span>{`${movie.vote_average} , ${parseInt(
              movie.revenue / 10000000
            )}M revenue`}</span>
          </div>
          <ul>
            <li>
              <b>Runtime</b>: {`${movie.runtime}`}min
            </li>
            <li>
              <b>Budget</b>: {`${parseInt(movie.budget / 10000000)}M`}
            </li>
            <li>
              <b>Revenue</b>: {`${parseInt(movie.revenue / 10000000)}M`}
            </li>
            <li>
              <b>Release Date</b>: {`${movie.release_date}`}
            </li>
            <li>
              <b>Tagline</b>: {`${movie.tagline}`}
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
