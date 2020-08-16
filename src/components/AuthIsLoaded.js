import React from 'react';
import { connect } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import Loading from './Loading';

const AuthIsLoaded = props => {
  return !isLoaded(props.firebaseAuth) ? <Loading /> : props.children;
};

const mapStateToProps = state => ({
  firebaseAuth: state.firebase.auth,
});

export default connect(mapStateToProps, null)(AuthIsLoaded);
