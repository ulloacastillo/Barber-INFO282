import React, { useReducer } from "react";

import barberContext from "./barberContext";
import barberReducer from "./barberReducer";
import { GET_BARBERS } from "../../types/index";

const BarberState = (props) => {
  const barberos = [
    { id: 1, nombre: "Gabriel Cruces" },
    { id: 2, nombre: "Simon Vergara" },
    { id: 3, nombre: "Marcelo Soto" },
  ];

  const initialState = {
    barberos: [],
  };

  const [state, dispatch] = useReducer(barberReducer, initialState);

  const getBarbers = () => {
    dispatch({ type: GET_BARBERS, payload: barberos });
  };

  return (
    <barberContext.Provider value={{ barberos: state.barberos, getBarbers }}>
      {props.children}
    </barberContext.Provider>
  );
};

export default BarberState;
