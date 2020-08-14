import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { inputValue, signUp } from '../actions/auth.js';

const Register = props => {
  const { auth, inputValue, signUp } = props;

  const isFormValid = () => {
    const { name, email, password } = auth;
    return name && email && password;
  };

  const registerUser = e => {
    e.preventDefault();
    signUp(
      e.target.name.value,
      e.target.email.value,
      e.target.password.value,
      () => props.history.push('/')
    );
    // フォームの値を空にする
    e.target.name.value = '';
    e.target.email.value = '';
    e.target.password.value = '';
  };

  if (auth.isLoggedIn) {
    return <Redirect to={'/'} />;
  } else {
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
                    name="name"
                    placeholder="ユーザ名"
                    onChange={e => inputValue(e.target.name, e.target.value)}
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
            <input
              className="button"
              type="submit"
              value="新規登録"
              disabled={!isFormValid()}
            />
          </div>
        </form>
        <div className="mt-2 has-text-centered">
          <Link to="/login">ログインはこちらから</Link>
        </div>
      </>
    );
  }
};

const mapStateToProps = state => {
  console.log('state', state);
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => ({
  inputValue: (name, value) => dispatch(inputValue(name, value)),
  signUp: (name, email, password, callback) =>
    dispatch(signUp(name, email, password, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
