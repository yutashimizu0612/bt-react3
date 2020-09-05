import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal';
import { sendWallet } from '../actions/user';
import Modal from '@material-ui/core/Modal';
import './MainModal.css';

const MainModal = props => {
  const { closeModal, sendWallet } = props;
  const { isOpen, modalType } = props.modal;
  const { name } = props.modal.wallet;
  const { targetId, uid } = props.modal.remittance;
  const possession =
    modalType === 'wallet'
      ? props.modal.wallet.possession
      : props.modal.remittance.possession;
  const handleSendWallet = e => {
    e.preventDefault();
    console.log(e.target.amount.value);
    sendWallet(targetId, e.target.amount.value, uid);
  };
  return (
    <Modal open={isOpen} onClose={closeModal}>
      <div className="wallet-modal">
        {modalType === 'wallet' && (
          <>
            <div className="wallet-modal__body">
              <p className="wallet-modal__name">{name}さんの残高</p>
              <p className="wallet-modal__possession">{possession}</p>
            </div>
            <div className="wallet-modal__bottom">
              <button className="button is-danger" onClick={() => closeModal()}>
                close
              </button>
            </div>
          </>
        )}
        {modalType === 'remittance' && (
          <form onSubmit={e => handleSendWallet(e)}>
            <div className="wallet-modal__body">
              <p className="wallet-modal__name">あなたの残高：{possession}</p>
              <p>送る金額</p>
              <input type="number" name="amount" />
            </div>
            <div className="wallet-modal__bottom">
              <button className="button is-danger" type="submit">
                送信
              </button>
            </div>
          </form>
        )}
      </div>
    </Modal>
  );
};

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  sendWallet: (targetId, amount, uid) =>
    dispatch(sendWallet(targetId, amount, uid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainModal);
