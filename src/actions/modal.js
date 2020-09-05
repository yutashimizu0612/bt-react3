export const OPEN_WALLET_MODAL = 'OPEN_WALLET_MODAL';
export const OPEN_REMITTANCE_MODAL = 'OPEN_REMITTANCE_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openWalletModal = (name, possession) => {
  return { type: OPEN_WALLET_MODAL, name, possession };
};

export const openRemittanceModal = (possession, targetId, uid) => {
  return { type: OPEN_REMITTANCE_MODAL, possession, targetId, uid };
};

export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
