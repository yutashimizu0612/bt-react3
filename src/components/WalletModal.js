import React from 'react';
import { connect } from 'react-redux';
import { closeWalletModal } from '../actions/modal';
import Modal from '@material-ui/core/Modal';
import './WalletModal.css';

const WalletModal = props => {
  const { closeWalletModal } = props;
  const { name, possession, isOpen } = props.modal;
  return (
    <Modal open={isOpen} onClose={closeWalletModal}>
      <div className="wallet-modal">
        <div className="wallet-modal__body">
          <p className="wallet-modal__name">{name}さんの残高</p>
          <p className="wallet-modal__possession">{possession}</p>
        </div>
        <div className="wallet-modal__bottom">
          <button
            className="button is-danger"
            onClick={() => closeWalletModal()}>
            close
          </button>
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = state => ({
  modal: state.modal.wallet,
});

const mapDispatchToProps = dispatch => ({
  closeWalletModal: () => dispatch(closeWalletModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletModal);
