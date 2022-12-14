import {
  AUTH_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "../_actions/types";
//s

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      break;
    case REGISTER_USER:
      return { ...state, register: action.payload };
      break;
    case AUTH_USER:
      return {
        ...state,
        userData: action.payload,
        name: action.payload.name,
        isAdmin: action.payload.isAdmin,
        isAuth: action.payload.isAuth,
      };
      break;
    case LOGOUT_USER:
      return {
        ...state,
        userData: action.payload,
        isAdmin: action.payload.isAdmin,
        isAuth: action.payload.isAuth,
      };
      break;

    default:
      return state;
  }
}
