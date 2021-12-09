import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

import logoBlanco from "./nr_white.svg";

import Header from "./components/layout/Header";

const Home = () => {
  return (
    <Fragment>
      <Header></Header>
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
