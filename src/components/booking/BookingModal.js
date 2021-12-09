import React, { useState, useContext, useEffect } from "react";
import Calendar from "./Calendar";

import dateContext from "../../context/dates/dateContext";
import barberContext from "../../context/barbers/barberContext";

import { Button, Modal } from "react-bootstrap";

import DateButton from "../layout/DateButton";

const BookingModal = ({ show, handleClose, service }) => {
  const datesContext = useContext(dateContext);
  const {
    horas,
    horasBarbero,
    diaSeleccionado,
    mesSeleccionado,
    idSeleccionado,
    getDates,
    getHorasBarbero,
  } = datesContext;

  const barbersContext = useContext(barberContext);
  const { barberos, getBarbers } = barbersContext;

  //state para mostrar resumen o calendario de reserva
  const [booking, setBooking] = useState(true);

  //traer las horas disponibles
  useEffect(() => {
    getDates();
    getBarbers();
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    getHorasBarbero(e.target.value);
  };

  const handleClick = (e) => {
    setBooking(!booking);
    getHorasBarbero(null);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>
            {booking ? "Reserva de Hora" : "Resumen de la hora"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  {service.nombre}
                  Valor: {service.precio}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ">
              {booking ? (
                <>
                  <h4 className="p-3">Barber@s</h4>
                  <div className="card">
                    <div className="card-header">Nombre 1</div>
                    <div className="card-body">
                      <h6>Hola</h6>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={handleChange}
                      >
                        <option selected>Seleccione Barbero</option>
                        {barberos.map((barbero) => (
                          <option value={barbero.id} key={barbero.id}>
                            {barbero.nombre}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>{" "}
                </>
              ) : null}{" "}
            </div>
            <div className="col-md-3 p-3">
              {booking ? (
                <>
                  {" "}
                  <h4>Seleccione El Día</h4>
                  <Calendar />
                </>
              ) : null}
            </div>

            <div className="col-md-5 p-3  ">
              {booking ? (
                <>
                  {" "}
                  <h4>Seleccione La hora</h4>
                  {horasBarbero
                    .filter(
                      (hora) =>
                        hora.dia === diaSeleccionado &&
                        hora.mes === mesSeleccionado
                    )
                    .map((hora) => (
                      <DateButton key={hora.id} hora={hora}></DateButton>
                    ))}{" "}
                </>
              ) : null}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          {booking ? (
            <Button
              variant="primary"
              disabled={idSeleccionado ? false : true}
              onClick={handleClick}
            >
              Siguiente Paso
            </Button>
          ) : (
            <>
              <Button variant="primary">Confirmar Reserva</Button>
              <Button variant="danger" onClick={handleClick}>
                Volver Atrás
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BookingModal;
