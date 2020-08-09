import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/auth.js';

export class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { login } = this.props;
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
                  onChange={e => this.handleChange(e)}
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
                  onChange={e => this.handleChange(e)}
                />
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6 has-text-centered">
          {/* なぜonClick={login(this.state)}と書くとstateが変更されるたびにloginも発動するのか？ */}
          <button className="button" onClick={() => login(this.state)}>
            ログイン
          </button>
        </div>
        <div className="mt-2 has-text-centered">
          <Link to="/">新規登録はこちらから</Link>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: credentials => dispatch(login(credentials)),
});

export default connect(null, mapDispatchToProps)(Login);
