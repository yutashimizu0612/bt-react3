import { INPUT_VALUE } from '../actions/auth.js';
import { INITIALIZE_STATE } from '../actions/auth.js';

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
    case INITIALIZE_STATE:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default auth;
