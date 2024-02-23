import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./img/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container ">
        <div className="logo">
          <Link className="navbar-brand" to="/" onClick={closeNavbar}>
            <img src={Logo} alt="Logo" style={{ width: "120px" }} />
          </Link>
        </div>

        <div className="toggle px-5 ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleNavbar}
            style={{ color: "rgb(54,42,150)" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ml-auto px-4  ">
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={closeNavbar}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeNavbar}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Portifolia" onClick={closeNavbar}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/staff" onClick={closeNavbar}>
                Staff
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/donate" onClick={closeNavbar}>
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
