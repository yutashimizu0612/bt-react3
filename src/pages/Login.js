import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <h2 className="title is-3 mb-6 has-text-centered">ログイン画面</h2>
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
        <button className="button">ログイン</button>
      </div>
      <div className="mt-2 has-text-centered">
        <Link to="/">新規登録はこちらから</Link>
      </div>
    </>
  );
};

export default Login;
