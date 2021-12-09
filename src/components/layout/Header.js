import React from "react";

import { Link } from "react-router-dom";
import logo from "./nr.svg";
import logoBlanco from "./nr_white.svg";
import barberia from "./barberia.jpeg";
import "/Users/ulloacastillo/Desktop/Barber-INFO282/src/style.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark nav-fixed ">
      <div className="container-fluid">
        <img src={logoBlanco} height="80" className="App-logo" alt="logo" />

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/servicios">
                Servicios
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ubicación
              </a>
            </li>
          </ul>
          <a className="btn btn-outline-info" href="#">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
