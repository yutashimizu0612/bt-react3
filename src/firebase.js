import firebase from 'firebase/app';
import 'firebase/auth';

import FIREBASE_CONFIG from './env.js';

if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

export default firebase;
