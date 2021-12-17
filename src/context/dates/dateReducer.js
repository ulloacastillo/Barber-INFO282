import {
  GET_DATES,
  SET_MONTH,
  SET_DAY,
  DATE_BARBER,
  CURRENT_DATE,
} from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_DATES:
      return { ...state, horas: action.payload };

    case SET_MONTH:
      return { ...state, mesSeleccionado: action.payload };

    case SET_DAY:
      return { ...state, diaSeleccionado: action.payload };

    case DATE_BARBER:
      console.log(
        state.horas.filter((hora) => hora.idEstilista === action.payload)
      );
      return {
        ...state,
        horasBarbero: state.horas.filter(
          (hora) => hora.id_barbero === parseInt(action.payload)
        ),
      };

    case CURRENT_DATE:
      return { ...state, idSeleccionado: action.payload };

    default:
      return state;
  }
};
