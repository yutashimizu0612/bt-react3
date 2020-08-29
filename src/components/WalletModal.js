import React from 'react';
import { connect } from 'react-redux';
import { closeWalletModal } from '../actions/modal';
import Modal from '@material-ui/core/Modal';

const WalletModal = props => {
  const { closeWalletModal } = props;
  const { name, possession, isOpen } = props.modal;
  return (
    <Modal open={isOpen} onClose={closeWalletModal}>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{name}さんの残高</p>
        </header>
        <section className="modal-card-body">{possession}</section>
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
