import {
  INPUT_VALUE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
} from '../actions/auth.js';

const initialState = {
  name: '',
  email: '',
  password: '',
  isLoggedIn: null,
  user: null,
  error: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_VALUE:
      console.log(action);
      return {
        ...state,
        [action.name]: action.value,
      };
    case LOGIN_SUCCESS:
      console.log('login success');
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
      };
    case LOGIN_ERROR:
      console.log('login error');
      return {
        ...state,
        error: action.error,
      };
    case LOGOUT_SUCCESS:
      console.log('logout success');
      return state;
    default:
      return state;
  }
};

export default auth;
