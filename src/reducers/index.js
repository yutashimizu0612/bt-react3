import { combineReducers } from 'redux';
import auth from './auth';
import user from './user';
import { firebaseReducer } from 'react-redux-firebase';

export default combineReducers({ auth, user, firebase: firebaseReducer });
