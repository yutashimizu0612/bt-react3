import React, { Component } from 'react';
import './Dashboard.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

import { openWalletModal } from '../actions/modal';
import Logout from '../components/Logout';
import SubmitModal from '../components/SubmitModal';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      possession: null,
      targetId: null, // 送金される側のユーザID
      uid: null, // 送金する側のユーザID（ログイン中のユーザ）
    };
    this.closeModal = this.closeModal.bind(this);
    this.openSubmitModal = this.openSubmitModal.bind(this);
  }

  openSubmitModal(possession, targetId, uid) {
    this.setState({
      isOpen: true,
      possession,
      targetId,
      uid,
    });
  }

  closeModal() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { users, openWalletModal } = this.props;
    const { auth, profile } = this.props.firebase;
    return !auth.uid ? (
      <Redirect to={'/login'} />
    ) : (
      <>
        <div className="mb-6 has-text-right">
          <Logout />
        </div>
        <div className="status">
          <span>{profile.name}さんようこそ！</span>
          <span>残高：{profile.possession}</span>
        </div>
        <h2 className="title is-3 my-6 has-text-centered">ユーザ一覧</h2>
        <div className="users">
          <h3 className="title is-5">ユーザ名</h3>
          <ul className="users-list">
            {users &&
              users.map(user => (
                <li key={user.id} className="user-item">
                  <p className="user-item__name">{user.name}</p>
                  <button
                    className="button is-primary mx-2"
                    onClick={() => openWalletModal(user.name, user.possession)}>
                    walletを見る
                  </button>
                  <button
                    className="button is-primary"
                    onClick={() =>
                      this.openSubmitModal(
                        profile.possession,
                        user.id,
                        auth.uid
                      )
                    }>
                    送る
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <SubmitModal
          isOpen={this.state.isOpen}
          possession={this.state.possession}
          targetId={this.state.targetId}
          uid={this.state.uid}
          onClose={this.closeModal}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.firestore.ordered.users,
    firebase: state.firebase,
  };
};

const mapDispatchToProps = dispatch => ({
  openWalletModal: (name, possession) =>
    dispatch(openWalletModal(name, possession)),
});

export default compose(
  firestoreConnect(() => [{ collection: 'users' }]),
  connect(mapStateToProps, mapDispatchToProps)
)(Dashboard);
