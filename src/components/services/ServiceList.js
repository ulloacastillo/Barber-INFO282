import React, { Fragment } from "react";
import Service from "../booking/Service.js";
import Header from "../layout/Header.js";
import services from "./services.json";

const ServiceList = () => {
  return (
    <Fragment>
      <Header />
      <div className="row">
        {services.map((service) => (
          <Service service={service} key={service.id} />
        ))}
      </div>
    </Fragment>
  );
};

export default ServiceList;
