import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider, useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import firebase, { FIREBASE_CONFIG } from './firebase';
import {
  ReactReduxFirebaseProvider,
  getFirebase,
  isLoaded,
} from 'react-redux-firebase';
import reducer from './reducers';

import './index.css';
import 'bulma/css/bulma.css';

import App from './components/App';
import Loading from './components/Loading';
import * as serviceWorker from './serviceWorker';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ getFirebase })))
);

const rrfProps = {
  firebase,
  config: FIREBASE_CONFIG,
  dispatch: store.dispatch,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <Loading />;
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
