import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

export default combineReducers({
  auth,
  user,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
