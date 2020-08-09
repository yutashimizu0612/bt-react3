export const INPUT_VALUE = 'INPUT_VALUE';
export const EMPTY_VALUE = 'EMPTY_VALUE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const inputValue = (name, value) => {
  return {
    type: 'INPUT_VALUE',
    name,
    value,
  };
};

export const emptyValue = () => {
  return {
    type: 'EMPTY_VALUE',
  };
};

export const login = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch(error => {
        dispatch({ type: 'LOGIN_ERROR', error });
      });
  };
};
