import React, { useState, Fragment } from "react";
import logo from "./nr.svg";
import logoBlanco from "./nr_white.svg";
import barberia from "./barberia.jpeg";
import "./style.css";
const Home = () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark nav-fixed ">
        <div className="container-fluid">
          <img src={logoBlanco} height="80" className="App-logo" alt="logo" />

          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Servicios
                </a>
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
      <div className="home-container">
        <div className="home-content ">
          <img className="home-img" src={logoBlanco} width="25%"></img>
          <button className="btn home-btn">Agenda tu Hora</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
