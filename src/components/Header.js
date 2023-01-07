import "../index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="header">
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{ backgroundColor: "transparent" }}
      >
        <div className="navbar-brand">
          <div
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={() => setHovered(!hovered)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div className={`navbar-menu ${hovered ? "is-active" : ""}`}>
          <div className="navbar-start pl-3">
            <Link
              to="/"
              className="navbar-item"
              onClick={() => setHovered(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="navbar-item"
              onClick={() => setHovered(false)}
            >
              About
            </Link>
            <Link
              to="/works"
              className="navbar-item"
              onClick={() => setHovered(false)}
            >
              Works
            </Link>
            <Link
              to="/contact"
              className="navbar-item"
              onClick={() => setHovered(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
