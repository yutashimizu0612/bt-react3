export const OPEN_WALLET_MODAL = 'OPEN_WALLET_MODAL';
export const CLOSE_WALLET_MODAL = 'CLOSE_WALLET_MODAL';

export const openWalletModal = (name, possession) => {
  return dispatch => {
    dispatch({ type: OPEN_WALLET_MODAL, name, possession });
  };
};

export const closeWalletModal = () => {
  return { type: CLOSE_WALLET_MODAL };
};
