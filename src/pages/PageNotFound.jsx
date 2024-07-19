import pagenotFoundImage from "../assets/error.jpg";
import "./PageNotFound.css";
import { useNavigate } from "react-router-dom";

export const PageNotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <main>
      <section className="main-404-container">
        <p>404, Oops!</p>
        <img className="" src={pagenotFoundImage} alt="404 Page not found" />
        <button onClick={handleClick}>Back To Cinemate</button>
      </section>
    </main>
  );
};
