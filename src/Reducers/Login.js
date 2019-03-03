import { USER_NAME_SUBMIT } from "../Actions/Login";
const defaultstate = { name: "", email: "", password: "" };
export default function Login(state = defaultstate, action) {
  switch (action.type) {
    case USER_NAME_SUBMIT:
      let newState = { ...state };
      newState.name = action.payload.name;

      return newState;
    default:
      return state;
  }
}
