import Service from "./components/Service";
import services from "./services.json";
import React, { useState, Fragment } from "react";

import Home from "./Home";

function App() {
  return (
    <Fragment>
      <Home />
      <div className="row">
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
    </Fragment>
  );
}

export default App;
