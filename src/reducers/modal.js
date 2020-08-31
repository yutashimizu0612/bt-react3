import { OPEN_WALLET_MODAL, CLOSE_WALLET_MODAL } from '../actions/modal';

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
        wallet: {
          ...initialState.wallet,
          isOpen: false,
        },
      };
    default:
      return state;
  }
};

export default modal;
