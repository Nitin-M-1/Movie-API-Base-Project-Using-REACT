import { Link } from "react-router-dom";
import "./Card.css";
export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  return (
    <div className="card-container">
      <Link to={`/movie/${id}`}>
        <img
          className="movie-poster"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : "https://images.pexels.com/photos/821749/pexels-photo-821749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
        />
      </Link>
      <div className="movie-description">
        <Link to={`/movie/${id}`}>
          <h3>{original_title}.</h3>
        </Link>
        <p>{overview}</p>
      </div>
    </div>
  );
};
// 8:23
