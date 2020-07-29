import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    };
    this.isFormValid = this.isFormValid.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  isFormValid = () => {
    const { name, email, password } = this.state;
    return name && email && password;
  };
  registerUser = e => {
    e.preventDefault();
    const name = this.state.name;
    // firebaseへの新規ユーザ登録処理
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(function () {
        const user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: name,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    // フォームの値を空にする
    e.target.name.value = '';
    e.target.email.value = '';
    e.target.password.value = '';
    // stateの値を空にする
    this.setState({
      name: '',
      email: '',
      password: '',
    });
  };

  render() {
    return (
      <>
        <h2 className="title is-3 mb-6 has-text-centered">新規登録画面</h2>
        <form onSubmit={e => this.registerUser(e)}>
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
                    onChange={e => this.handleChange(e)}
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
            <input
              className="button"
              type="submit"
              value="新規登録"
              disabled={!this.isFormValid()}
            />
          </div>
        </form>
        <div className="mt-2 has-text-centered">
          <Link to="/login">ログインはこちらから</Link>
        </div>
      </>
    );
  }
}
