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
  const initialState = {
    horas: [],
    horasBarbero: [],
    diaSeleccionado: new Date().getDate(),
    mesSeleccionado: new Date().getMonth(),
    idSeleccionado: null,
  };

  const [state, dispatch] = useReducer(dateReducer, initialState);

  const getDates = (horas) => {
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
