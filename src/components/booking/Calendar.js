import React, { useState, useContext } from "react";

import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dateContext from "../../context/dates/dateContext";
import es from "date-fns/locale/es";
registerLocale("es", es);

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  const datesContext = useContext(dateContext);
  const { diaSeleccionado, mesSeleccionado, setDay, setMonth } = datesContext;

  return (
    <DatePicker
      selected={startDate}
      locale="es"
      onChange={(date) => {
        setStartDate(date);
        setDay(date.getDate());
        setMonth(date.getMonth());
      }}
      minDate={new Date()}
      inline
    />
  );
};

export default Calendar;
