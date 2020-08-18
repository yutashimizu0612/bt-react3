import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import firebase, { FIREBASE_CONFIG } from './firebase';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import reducer from './reducers';

import './index.css';
import 'bulma/css/bulma.css';

import App from './components/App';
import AuthIsLoaded from './components/AuthIsLoaded';
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
