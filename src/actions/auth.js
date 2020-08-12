import firebase from '../firebase';

export const INPUT_VALUE = 'INPUT_VALUE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const inputValue = (name, value) => {
  return {
    type: 'INPUT_VALUE',
    name,
    value,
  };
};

export const signUp = (name, email, password) => {
  return dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(createdUser => {
        dispatch({ type: LOGIN_SUCCESS, createdUser });
        createdUser.user.updateProfile({
          displayName: name,
        });
      })
      .catch(error => {
        dispatch({ type: LOGIN_ERROR, error });
      });
  };
};

export const login = (email, password) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({ type: LOGIN_SUCCESS, user });
      })
      .catch(error => {
        dispatch({ type: LOGIN_ERROR, error });
      });
  };
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: LOGOUT_SUCCESS });
      });
  };
};
