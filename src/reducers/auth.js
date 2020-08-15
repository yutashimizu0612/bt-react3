import { INPUT_VALUE } from '../actions/auth.js';

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
    default:
      return state;
  }
};

export default auth;
