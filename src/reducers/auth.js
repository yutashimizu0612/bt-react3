import {
  INPUT_VALUE,
  EMPTY_VALUE,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../actions/auth.js';

const initialState = {
  name: '',
  email: '',
  password: '',
  authError: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_VALUE:
      console.log(action);
      return {
        ...state,
        [action.name]: action.value,
      };
    case EMPTY_VALUE:
      return {
        name: '',
        email: '',
        password: '',
      };
    case LOGIN_SUCCESS:
      console.log('login success');
      return {
        ...state,
        authError: null,
      };
    case LOGIN_ERROR:
      console.log('login error');
      return {
        ...state,
        authError: 'Login Error',
      };
    default:
      return state;
  }
};

export default auth;
