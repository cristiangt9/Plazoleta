import { combineReducers } from "redux";
import reducerUser from "./user.reducer";
import ModalReducer from "./modal.reducer";

const reducers = combineReducers({ user: reducerUser, modal: ModalReducer });

export default reducers;
