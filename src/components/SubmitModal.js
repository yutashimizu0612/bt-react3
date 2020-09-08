import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendWallet } from '../store/users';
import Modal from '@material-ui/core/Modal';
import './CommonModal.css';

export class SubmitModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
    this.isPositiveAndLessThanPossession = this.isPositiveAndLessThanPossession.bind(
      this
    );
    this.canSendMoney = this.canSendMoney.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSendWallet = this.handleSendWallet.bind(this);
  }
  isPositiveAndLessThanPossession = amount => {
    return 0 < amount && amount <= this.props.possession;
  };
  canSendMoney = () => {
    const currentAmount = parseInt(this.state.amount);
    return this.isPositiveAndLessThanPossession(currentAmount);
  };
  handleChange = e => {
    this.setState({
      amount: e.target.value,
    });
  };
  handleSendWallet = e => {
    if (this.canSendMoney()) {
      this.props.sendWallet(
        this.props.targetId,
        this.state.amount,
        this.props.uid
      );
      // stateの値を初期値に戻す
      this.setState({
        amount: 0,
      });
    }
  };
  render() {
    const { isOpen, possession, onClose } = this.props;
    return (
      <Modal open={isOpen} onClose={onClose}>
        <div className="common-modal">
          <div className="common-modal__body">
            <p className="common-modal__name">あなたの残高：{possession}</p>
            <p>送る金額</p>
            <input
              type="number"
              onChange={e => this.handleChange(e)}
              value={this.state.amount}
            />
          </div>
          <div className="common-modal__bottom">
            <button
              className="button is-danger"
              type="submit"
              disabled={!this.canSendMoney()}
              onClick={e => this.handleSendWallet(e)}>
              送信
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modal: state.modal,
});

const mapDispatchToProps = dispatch => ({
  sendWallet: (targetId, amount, uid) =>
    dispatch(sendWallet(targetId, amount, uid)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubmitModal);
