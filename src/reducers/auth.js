import { INPUT_VALUE, EMPTY_VALUE } from '../actions/auth.js';

const initialState = {
  name: '',
  email: '',
  password: '',
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
    default:
      return state;
  }
};

export default auth;
