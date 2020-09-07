import { combineReducers } from 'redux';
import auth from './auth';
import modal from './modal';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

export default combineReducers({
  auth,
  modal,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
