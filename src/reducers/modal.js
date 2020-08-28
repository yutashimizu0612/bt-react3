import { OPEN_WALLET_MODAL } from '../actions/modal.js';
import { CLOSE_WALLET_MODAL } from '../actions/modal.js';

const initialState = {
  wallet: {
    name: '',
    possession: null,
    isOpen: false,
  },
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_WALLET_MODAL:
      return {
        ...state,
        wallet: {
          name: action.name,
          possession: action.possession,
          isOpen: !state.wallet.isOpen,
        },
      };
    case CLOSE_WALLET_MODAL:
      return {
        ...state,
        ...initialState.wallet,
      };
    default:
      return state;
  }
};

export default modal;
