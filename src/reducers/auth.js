import { INPUT_VALUE } from '../actions/auth.js';
import { EMPTY_VALUE } from '../actions/auth.js';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_VALUE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case EMPTY_VALUE:
      console.log('EMPTY_VALUE');
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
