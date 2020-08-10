import React from 'react';
import './Dashboard.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Logout from '../components/Logout';

const Dashboard = props => {
  const { users, auth } = props;
  console.log(auth);
  if (!auth.isLoggedIn) {
    return <Redirect to={'/login'} />;
  } else {
    return (
      <>
        <div className="mb-6 has-text-right">
          <Logout />
        </div>
        <div className="status">
          <span>{auth.name}さんようこそ！</span>
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
                  <button className="button is-primary mx-2">
                    walletを見る
                  </button>
                  <button className="button is-primary">送る</button>
                </li>
              ))}
          </ul>
        </div>
      </>
    );
  }
};

const mapStateToProps = state => ({
  users: state.user.users,
  auth: state.auth,
});

export default connect(mapStateToProps, null)(Dashboard);
