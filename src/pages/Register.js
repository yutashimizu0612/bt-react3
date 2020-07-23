import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <>
      <h2 className="title is-3 mb-6 has-text-centered">新規登録画面</h2>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">ユーザ名</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input className="input" type="text" placeholder="ユーザ名" />
            </p>
          </div>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">メールアドレス</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input
                className="input"
                type="email"
                placeholder="メールアドレス"
              />
            </p>
          </div>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">パスワード</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control">
              <input
                className="input"
                type="password"
                placeholder="パスワード"
              />
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 has-text-centered">
        <button className="button">新規登録</button>
      </div>
      <div className="mt-2 has-text-centered">
        <Link to="/login">ログインはこちらから</Link>
      </div>
    </>
  );
};

export default Register;
