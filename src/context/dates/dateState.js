import React, { useReducer } from "react";

import dateContext from "./dateContext";
import dateReducer from "./dateReducer";

import {
  GET_DATES,
  SET_MONTH,
  SET_DAY,
  DATE_BARBER,
  CURRENT_DATE,
} from "../../types/index";

const DateState = (props) => {
  const horas = [
    {
      idEstilista: 1,
      dia: 11,
      mes: 11,
      horaInicial: 10,
      disponible: true,
      id: 1,
    },
    {
      idEstilista: 1,
      dia: 11,
      mes: 11,
      horaInicial: 11,
      disponible: true,
      id: 2,
    },
    {
      idEstilista: 1,
      dia: 12,
      mes: 11,
      horaInicial: 12,
      disponible: false,
      id: 3,
    },
    {
      idEstilista: 2,
      dia: 16,
      mes: 11,
      horaInicial: 9,
      disponible: true,
      id: 4,
    },
    {
      idEstilista: 3,
      dia: 22,
      mes: 11,
      horaInicial: 10,
      disponible: true,
      id: 5,
    },
  ];

  const initialState = {
    horas: [],
    horasBarbero: [],
    diaSeleccionado: new Date().getDate(),
    mesSeleccionado: new Date().getMonth(),
    idSeleccionado: null,
  };

  const [state, dispatch] = useReducer(dateReducer, initialState);

  const getDates = () => {
    dispatch({ type: GET_DATES, payload: horas });
  };

  const setDay = (day) => {
    dispatch({ type: SET_DAY, payload: day });
  };

  const setMonth = (month) => {
    dispatch({ type: SET_MONTH, payload: month });
  };

  const getHorasBarbero = (barberId) => {
    dispatch({ type: DATE_BARBER, payload: barberId });
  };

  const setCurrentDate = (dateId) => {
    dispatch({ type: CURRENT_DATE, payload: dateId });
  };

  return (
    <dateContext.Provider
      value={{
        horas: state.horas,
        horasBarbero: state.horasBarbero,
        diaSeleccionado: state.diaSeleccionado,
        mesSeleccionado: state.mesSeleccionado,
        idSeleccionado: state.idSeleccionado,
        getDates,
        setDay,
        setMonth,
        getHorasBarbero,
        setCurrentDate,
      }}
    >
      {props.children}
    </dateContext.Provider>
  );
};

export default DateState;
