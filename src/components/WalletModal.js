import React from 'react';
import { connect } from 'react-redux';
import { closeWalletModal } from '../actions/modal';

const WalletModal = props => {
  const { name, possession, isOpen } = props.modal;
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{name}さんの残高</p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => closeWalletModal()}></button>
          </header>
          <section className="modal-card-body">{possession}</section>
          <footer className="modal-card-foot">
            <button className="button" onClick={() => closeWalletModal()}>
              Close
            </button>
          </footer>
        </div>
        <button className="modal-close is-large" aria-label="close"></button>
      </div>
    )
  );
};

const mapStateToProps = state => ({
  modal: state.modal.wallet,
});

const mapDispatchToProps = dispatch => ({
  closeWalletModal: () => dispatch(closeWalletModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletModal);
