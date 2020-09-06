export const OPEN_WALLET_MODAL = 'OPEN_WALLET_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openWalletModal = (name, possession) => {
  return { type: OPEN_WALLET_MODAL, name, possession };
};

export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
