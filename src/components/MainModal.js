import React from 'react';
import { connect } from 'react-redux';
import Modal from '@material-ui/core/Modal';
import './CommonModal.css';

const MainModal = props => {
  const { isOpen, text, buttonFunc } = props.modal;
  const { name, possession } = props.modal.wallet;
  return (
    <Modal open={isOpen} onClose={buttonFunc}>
      <div className="common-modal">
        <div className="common-modal__body">
          <p className="common-modal__name">{name}さんの残高</p>
          <p className="common-modal__possession">{possession}</p>
        </div>
        <div className="common-modal__bottom">
          <button className="button is-danger" onClick={buttonFunc}>
            {text}
          </button>
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = state => ({
  modal: state.modal,
});

export default connect(mapStateToProps, null)(MainModal);
