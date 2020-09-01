import { SEND_WALLET_SUCCESS, SEND_WALLET_ERROR } from '../actions/user';

const initialState = {
  name: '',
  possession: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case SEND_WALLET_SUCCESS:
      console.log('sent wallet');
      return state;
    case SEND_WALLET_ERROR:
      console.log('send wallet error', action.error);
      return state;
    default:
      return state;
  }
};

export default user;
