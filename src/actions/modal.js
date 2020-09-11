export const OPEN_WALLET_MODAL = 'OPEN_WALLET_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (type, buttonFunc, name, possession) => {
  return { type: type, buttonFunc, name, possession };
};

export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
