import "./Header.css";
import Logo from "../assets/logo.png";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
export const Header = () => {
  const [MobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value;
    event.target.reset();
    return navigate(`/search?q=${queryTerm}`);
  };
  useEffect(() => {
    document.title = "ATOZ-Movies";
  });
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="company-logo">
          <img src={Logo} alt="" />
          <h2>ATOZ-Movies </h2>
        </Link>
        <div className={`menu ${MobileMenu ? "showVisibility" : ""}`}>
          <ul>
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/movies/popular">Popular</NavLink>
            <NavLink to="/movies/top">Top Rated</NavLink>
            <NavLink to="/movies/upcoming">Upcoming</NavLink>
          </ul>
        </div>
        <div className={`key-fetures ${MobileMenu ? "showVisibility" : ""}`}>
          <div className="search-box">
            <i className="bx bx-search-alt-2"></i>{" "}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="search"
                placeholder="search..."
                autoComplete="off"
              />
            </form>
          </div>
        </div>
      </div>
      <i
        onClick={() => setMobileMenu(!MobileMenu)}
        className="bx bx-menu mobile-Menu"
      ></i>
    </header>
  );
};
