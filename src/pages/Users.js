import React from 'react';
import './Users.css';

const Users = () => {
  return (
    <>
      <div className="status">
        <span>testさんようこそ！</span>
        <span>残高：500</span>
      </div>
      <h2 className="title is-3 my-6 has-text-centered">ユーザ一覧</h2>
      <div className="users">
        <h3 className="title is-5">ユーザ名</h3>
        <ul className="users-list">
          <li className="user-item">
            <p className="user-item__name">aaaaaa</p>
            <button class="button is-primary mx-2">walletを見る</button>
            <button class="button is-primary">送る</button>
          </li>
          <li className="user-item">
            <p className="user-item__name">bbbbbb</p>
            <button class="button is-primary mx-2">walletを見る</button>
            <button class="button is-primary">送る</button>
          </li>
          <li className="user-item">
            <p className="user-item__name">cccccc</p>
            <button class="button is-primary mx-2">walletを見る</button>
            <button class="button is-primary">送る</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Users;
