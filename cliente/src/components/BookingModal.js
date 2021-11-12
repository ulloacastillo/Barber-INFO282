import React, { useState} from "react";
import Calendar from './Calendar';


import { Button, Modal } from 'react-bootstrap';


const BookingModal = ({show, handleClose, service}) => {

  
    return (
      <>
        <Modal show={show} onHide={handleClose} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Reserva de Hora</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="row">
                <div className="col-md-12"> 
                    <div class="card">
                        <div class="card-body">
                            {service.nombre}
                            Valor: {service.precio}
                        </div>
                    </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 ">
                  <h4 className="p-3">Barber@s</h4>
                  <div class="card">
                    <div class="card-header">
                        Nombre 1
                    </div>
                    <div class="card-body">
                        <h6>Hola</h6>
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Seleccione Barbero</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                    </div>
                  </div>

                </div>
                <div className="col-md-3 p-3">
                    <h4>Seleccione El Día</h4>
                    <Calendar/>
                </div>
                
                <div className="col-md-5 p-3  ">
                    <h4>Seleccione La hora</h4>
                    <button type="button" className="btn btn-success m-1">9:50 - 10:50</button>
                    <button type="button" className="btn btn-success m-1">10:50 - 11:50</button>
                </div>
              </div>
          </Modal.Body>
          <Modal.Footer>

            <Button variant="primary" onClick={handleClose}>
              Siguiente Paso
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );

}


export default BookingModal;