import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendWallet } from '../actions/user';
import Modal from '@material-ui/core/Modal';
import './CommonModal.css';

export class SubmitModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    };
    this.canSendMoney = this.canSendMoney.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSendWallet = this.handleSendWallet.bind(this);
  }
  canSendMoney = () => {
    const currentAmount = parseInt(this.state.amount);
    // 入力値が"正の数"かつ"所持金より多い"場合：true
    return currentAmount > 0 && this.props.possession > currentAmount;
  };
  handleChange = e => {
    this.setState({
      amount: e.target.value,
    });
  };
  handleSendWallet = e => {
    e.preventDefault();
    if (this.canSendMoney()) {
      this.props.sendWallet(
        this.props.targetId,
        this.state.amount,
        this.props.uid
      );
      // stateとフォームの値を初期値に戻す
      this.setState({
        amount: 0,
      });
      e.target.amount.value = '';
    }
  };
  render() {
    const { isOpen, possession, onClose } = this.props;
    return (
      <Modal open={isOpen} onClose={onClose}>
        <div className="common-modal">
          <form onSubmit={e => this.handleSendWallet(e)}>
            <div className="common-modal__body">
              <p className="common-modal__name">あなたの残高：{possession}</p>
              <p>送る金額</p>
              <input
                type="number"
                name="amount"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="common-modal__bottom">
              <button
                className="button is-danger"
                type="submit"
                disabled={!this.canSendMoney()}>
                送信
              </button>
            </div>
          </form>
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
