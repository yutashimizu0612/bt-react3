import React from 'react';
import './Dashboard.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

import { openWalletModal, openRemittanceModal } from '../actions/modal';
import Logout from '../components/Logout';

const Dashboard = props => {
  const { users, openWalletModal, openRemittanceModal } = props;
  const { auth, profile } = props.firebase;

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
                    openRemittanceModal(profile.possession, user.id, auth.uid)
                  }>
                  送る
                </button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    users: state.firestore.ordered.users,
    firebase: state.firebase,
  };
};

const mapDispatchToProps = dispatch => ({
  openWalletModal: (name, possession) =>
    dispatch(openWalletModal(name, possession)),
  openRemittanceModal: (possession, targetId, uid) =>
    dispatch(openRemittanceModal(possession, targetId, uid)),
});

export default compose(
  firestoreConnect(() => [{ collection: 'users' }]),
  connect(mapStateToProps, mapDispatchToProps)
)(Dashboard);

// const mapStateToProps = state => {
//   return {
//     users: state.firestore.ordered.users,
//     firebase: state.firebase,
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   openWalletModal: (user, possession) =>
//     dispatch(openWalletModal(user, possession)),
//   sendWallet: (targetId, amount, uid) =>
//     dispatch(sendWallet(targetId, amount, uid)),
// });

// export default compose(
//   firestoreConnect(() => [{ collection: 'users' }]),
//   connect(mapStateToProps, mapDispatchToProps)
// )(Dashboard);
