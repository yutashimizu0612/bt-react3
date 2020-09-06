import { OPEN_WALLET_MODAL, CLOSE_MODAL } from '../actions/modal';

const initialState = {
  isOpen: false,
  wallet: {
    name: '',
    possession: null,
  },
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_WALLET_MODAL:
      return {
        ...state,
        isOpen: !state.isOpen,
        wallet: {
          name: action.name,
          possession: action.possession,
        },
      };
    case CLOSE_MODAL:
      return {
        isOpen: false,
        ...initialState,
      };
    default:
      return state;
  }
};

export default modal;
