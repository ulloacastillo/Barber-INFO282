import React, { useState} from "react";

import DatePicker,  { registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import es from 'date-fns/locale/es';
registerLocale('es', es)

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());

    return (
      <DatePicker
        selected={startDate}
        locale="es"
        onChange={(date) => setStartDate(date)}
        minDate={new Date()}
        inline
      />
    );
  };


  export default Calendar;