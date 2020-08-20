import firebase from '../firebase';
import { db } from '../firebase';

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
        console.log(createdUser);
        return db.collection('users').doc(createdUser.user.uid).set({
          name: name,
          possession: 0,
        });
      })
      .then(() => {
        console.log('signup success');
        callback();
      })
      .catch(error => {
        console.log('signup error');
        console.log(error);
      });
  };
};

export const login = (email, password, callback) => {
  return () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('login success');
        callback();
      })
      .catch(error => {
        console.log('login error');
        console.log(error.message);
      });
  };
};
