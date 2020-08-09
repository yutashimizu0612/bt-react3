import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS } from '../actions/auth.js';

const initialState = {
  authError: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
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
    case LOGOUT_SUCCESS:
      console.log('logout success');
      return state;
    default:
      return state;
  }
};

export default auth;
