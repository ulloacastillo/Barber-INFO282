import React, { useState, useContext } from "react";

import dateContext from "../../context/dates/dateContext";

const DateButton = (props) => {
  const datesContext = useContext(dateContext);
  const { setCurrentDate } = datesContext;

  const [clicked, setClicked] = useState(true);

  const handleClickDate = (e) => {
    setClicked(!clicked);
    if (clicked) {
      setCurrentDate(parseInt(e.target.value));
    } else {
      setCurrentDate(null);
    }
  };

  const color = clicked ? "btn btn-success m-1" : "btn btn-primary m-1";

  return (
    <button
      type="button"
      className={color}
      value={props.hora.id}
      onClick={handleClickDate}
    >
      {props.hora.horaInicial}:00 - {props.hora.horaInicial + 1}:00
    </button>
  );
};

export default DateButton;
