import React from 'react';
import { connect } from 'react-redux';
import { sendWallet } from '../actions/user';
import Modal from '@material-ui/core/Modal';
import './MainModal.css';

const SubmitModal = props => {
  const { isOpen, targetId, uid, possession, sendWallet, onClose } = props;
  const handleSendWallet = e => {
    e.preventDefault();
    console.log(e.target.amount.value);
    sendWallet(targetId, e.target.amount.value, uid);
  };
  return (
    <Modal open={isOpen} onClose={onClose}>
      <div className="wallet-modal">
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
      </div>
    </Modal>
  );
};

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => ({
  sendWallet: (targetId, amount, uid) =>
    dispatch(sendWallet(targetId, amount, uid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitModal);
