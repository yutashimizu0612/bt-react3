import firebase from '../firebase';

export const INPUT_VALUE = 'INPUT_VALUE';

export const inputValue = (name, value) => {
  return {
    type: INPUT_VALUE,
    name,
    value,
  };
};

export const signUp = (name, email, password, callback) => {
  return () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(createdUser => {
        console.log('login success');
        createdUser.user.updateProfile({
          displayName: name,
        });
        callback();
      })
      .catch(error => {
        console.log('login error');
        console.log(error);
      });
  };
};

export const login = (email, password, callback) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('login success');
        callback();
      })
      .catch(error => {
        console.log('login error');
        console.log(error);
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
        console.log('logout success');
      });
  };
};
