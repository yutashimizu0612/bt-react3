import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

const Logout = props => {
  const { logout } = props;
  return (
    <button className="button" onClick={logout()}>
      ログアウト
    </button>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(Logout);
