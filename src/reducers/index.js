import { combineReducers } from 'redux';
import auth from './auth';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

export default combineReducers({
  auth,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});
