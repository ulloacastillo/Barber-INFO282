import React, {useState} from "react";

import BookingModal from './BookingModal';

import { Button } from 'react-bootstrap';

const Service = ({service}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="col-md-3 m-3">
            <div class="card">
                <div class="card-header">
                    {service.nombre}
                </div>
                <div class="card-body">
                    <h5 class="card-title">{service.nombre}</h5>
                    <p class="card-text">{service.descripcion}</p>
                        <Button variant="primary" onClick={handleShow}>
                            Reserva +
                        </Button> 
                        <div className="row">
                            <BookingModal show={show} service = {service} handleClose={handleClose}/>
                        </div>
                </div>
            </div>
        </div>
    
        
    );
}

export default Service;