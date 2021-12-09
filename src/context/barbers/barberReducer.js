import { GET_BARBERS } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_BARBERS:
      return { ...state, barberos: action.payload };
    default:
      return state;
  }
};
