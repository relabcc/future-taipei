import { reactReduxFirebase } from 'react-redux-firebase';

import firebase from 'firebase/app';
import 'firebase/database';

import config from './config.json';

const firebaseEnhancer = reactReduxFirebase(firebase, {
  enableLogging: false, // enable/disable Firebase's database logging
});

firebase.initializeApp(config);

export {
  firebase,
  firebaseEnhancer,
};
