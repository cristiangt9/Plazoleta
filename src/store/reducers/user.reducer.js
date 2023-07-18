import * as Actions from "../actions";
const initialState = {
  nombres: "",
  documento: "",
  celular: "",
  email: "",
  saldo: 0,
  token: "",
};

const reducerUser = (state = initialState, { type, payload }) => {
  switch (type) {
    case Actions.SET_USUARIO:
      return {
        ...state,
        nombres: payload.nombres,
        documento: payload.documento,
        celular: payload.celular,
        email: payload.email,
      };
    case Actions.SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case Actions.SET_DOCUMENTO_CELULAR:
      return {
        ...state,
        documento: payload.documento,
        celular: payload.celular,
      };
    case Actions.SET_SALDO_NOMBRES:
      return {
        ...state,
        saldo: payload.saldo,
        nombres: payload.nombres,
      };
    case Actions.REMOVE_USUARIO:
      return {...initialState};
    default:
      return state;
  }
};

export default reducerUser;
