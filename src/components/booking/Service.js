import React, { useState, useContext } from "react";

import BookingModal from "./BookingModal";

import { Button } from "react-bootstrap";
import dateContext from "../../context/dates/dateContext";

const Service = ({ service }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="col-md-3 m-3">
      <div className="card h-100">
        <div className="card-header">{service.nombre}</div>
        <div className="card-body">
          <h5 className="card-title">{service.nombre}</h5>
          <p className="card-text">{service.descripcion}</p>
          <Button variant="primary" onClick={handleShow}>
            Reserva +
          </Button>
          <div className="row">
            <BookingModal
              show={show}
              service={service}
              handleClose={handleClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
