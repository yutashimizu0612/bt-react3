import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { inputValue, login } from '../actions/auth.js';

const Login = props => {
  const { auth, inputValue, login } = props;

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
                name="email"
                placeholder="メールアドレス"
                onChange={e => inputValue(e.target.name, e.target.value)}
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
                onChange={e => inputValue(e.target.name, e.target.value)}
              />
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 has-text-centered">
        <button
          className="button"
          onClick={() =>
            login(auth.email, auth.password, () =>
              props.history.push('/dashboard')
            )
          }>
          ログイン
        </button>
      </div>
      <div className="mt-2 has-text-centered">
        <Link to="/">新規登録はこちらから</Link>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  console.log('state', state);
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => ({
  inputValue: (name, value) => dispatch(inputValue(name, value)),
  login: (email, password, callback) =>
    dispatch(login(email, password, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
