import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal';
import Modal from '@material-ui/core/Modal';
import './MainModal.css';

const MainModal = props => {
  const { closeModal } = props;
  const { isOpen } = props.modal;
  const { name, possession } = props.modal.wallet;
  return (
    <Modal open={isOpen} onClose={closeModal}>
      <div className="wallet-modal">
        <div className="wallet-modal__body">
          <p className="wallet-modal__name">{name}さんの残高</p>
          <p className="wallet-modal__possession">{possession}</p>
        </div>
        <div className="wallet-modal__bottom">
          <button className="button is-danger" onClick={() => closeModal()}>
            close
          </button>
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainModal);
