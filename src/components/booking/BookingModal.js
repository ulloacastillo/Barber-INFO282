import React, { useState, useContext, useEffect } from "react";
import Calendar from "./Calendar";

import dateContext from "../../context/dates/dateContext";
import barberContext from "../../context/barbers/barberContext";

import { Button, Modal } from "react-bootstrap";

import axios from "axios";

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
    setCurrentDate,
  } = datesContext;

  const barbersContext = useContext(barberContext);
  const { barberos, getBarbers } = barbersContext;

  //state para mostrar resumen o calendario de reserva
  const [booking, setBooking] = useState(true);

  const [clicked, setClicked] = useState(false);

  const [horaClickeada, setHoraClickeada] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/horas")
      .then((response) => getDates(response.data.horas));
  }, []);

  //traer las horas disponibles
  useEffect(() => {
    getBarbers();
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    getHorasBarbero(e.target.value);
    setCurrentDate(null);
  };

  const handleClick = (e) => {
    setBooking(!booking);
    getHorasBarbero(null);
  };

  const handleClickDate = (e) => {
    if (parseInt(e.target.value) === horaClickeada) {
      setClicked(false);
      setCurrentDate(null);
      setHoraClickeada(null);
    } else {
      setCurrentDate(parseInt(e.target.value));
      setClicked(true);
      setHoraClickeada(parseInt(e.target.value));
    }
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
                        hora.mes - 1 === mesSeleccionado
                    )
                    .map((hora) => (
                      <Button
                        variant={
                          hora.id_hora === horaClickeada ? "success" : "primary"
                        }
                        className="m-1"
                        value={hora.id_hora}
                        key={hora.id_hora}
                        onClick={handleClickDate}
                      >
                        {hora.hora_inicial}:00 - {hora.hora_inicial + 1}:00
                      </Button>
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
