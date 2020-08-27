import React from 'react';
import './Dashboard.css';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

import Logout from '../components/Logout';

const Dashboard = props => {
  const { users } = props;
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
                <button className="button is-primary mx-2">walletを見る</button>
                <button className="button is-primary">送る</button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default compose(
  firestoreConnect(() => [{ collection: 'users' }]),
  connect(state => ({
    users: state.firestore.ordered.users,
    firebase: state.firebase,
  }))
)(Dashboard);
