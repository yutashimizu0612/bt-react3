import React from 'react';
import './Dashboard.css';
import { connect } from 'react-redux';

const Users = props => {
  const { loggedInUser, users } = props;
  return (
    <>
      <div className="status">
        <span>{loggedInUser.name}さんようこそ！</span>
        {/* todo：ログインしているユーザの所持金 */}
        <span>残高：</span>
      </div>
      <h2 className="title is-3 my-6 has-text-centered">ユーザ一覧</h2>
      <div className="users">
        <h3 className="title is-5">ユーザ名</h3>
        <ul className="users-list">
          {users &&
            users.map(user => (
              <li className="user-item">
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

const mapStateToProps = state => ({
  loggedInUser: state.auth,
  users: state.user.users,
});

export default connect(mapStateToProps, null)(Users);