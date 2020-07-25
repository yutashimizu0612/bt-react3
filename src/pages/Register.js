import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const registerUser = e => {
    e.preventDefault();
    console.log(e.target.user_name.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);
  };
  return (
    <>
      <h2 className="title is-3 mb-6 has-text-centered">新規登録画面</h2>
      <form onSubmit={e => registerUser(e)}>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">ユーザ名</label>
          </div>
          <div className="field-body">
            <div className="field">
              <p className="control">
                <input
                  className="input"
                  type="text"
                  name="user_name"
                  placeholder="ユーザ名"
                />
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
                  name="email"
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
                  name="password"
                  placeholder="パスワード"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 has-text-centered">
          <input className="button" type="submit" value="新規登録" />
        </div>
      </form>
      <div className="mt-2 has-text-centered">
        <Link to="/login">ログインはこちらから</Link>
      </div>
    </>
  );
};

export default Register;
