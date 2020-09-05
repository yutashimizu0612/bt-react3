import {
  OPEN_WALLET_MODAL,
  OPEN_REMITTANCE_MODAL,
  CLOSE_MODAL,
} from '../actions/modal';

const initialState = {
  isOpen: false,
  modalType: null,
  wallet: {
    name: '',
    possession: null,
  },
  remittance: {
    possession: null,
    targetId: null, // 送金される側のユーザID
    uid: null, // 送金する側のユーザID（ログイン中のユーザ）
  },
};

const modal = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_WALLET_MODAL:
      return {
        ...state,
        isOpen: !state.isOpen,
        modalType: 'wallet',
        wallet: {
          name: action.name,
          possession: action.possession,
        },
      };
    case OPEN_REMITTANCE_MODAL:
      return {
        ...state,
        isOpen: !state.isOpen,
        modalType: 'remittance',
        remittance: {
          possession: action.possession,
          targetId: action.targetId,
          uid: action.uid,
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
