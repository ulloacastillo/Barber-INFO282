import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import Service from "./components/booking/Service";
import React, { useState, Fragment } from "react";
import ServiceList from "./components/services/ServiceList";
import Home from "./Home";
import DateState from "./context/dates/dateState.js";
import BarberState from "./context/barbers/barberState.js";

function App() {
  return (
    <DateState>
      <BarberState>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/servicios" component={ServiceList} />
          </Switch>
        </Router>
      </BarberState>
    </DateState>

    /* <Fragment>
      <Home />
     
    </Fragment>*/
  );
}

export default App;
