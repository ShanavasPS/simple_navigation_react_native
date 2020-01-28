/**
 * @format
 */
import React from "react";
import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import {firebase} from '@react-native-firebase/messaging';

import rootReducer from './src/reducers'
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Saga
import { rootSaga } from './src/sagas';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(
      sagaMiddleware
    ),
  );

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

const persistor = persistStore(store, null, async () => {
  const messaging = firebase.messaging();
  try {
    const enabled = await messaging.hasPermission()
    if (!enabled) {
      await messaging.requestPermission()
    }

    const token = await messaging.getToken()
    if (token) {
      // store.dispatch(AppActions.updateFcmToken(token))
      console.token('the token is ' + token);
    }

    messaging.onTokenRefresh((fcmToken) => {
      // store.dispatch(AppActions.updateFcmToken(fcmToken))
      console.token('the refreshed token is ' + fcmToken);
    })
  } catch (error) {
    // TODO Decide on whether this error is important is enough to show to the user
      console.log('error in fetching messaging', error)
  }
})

export default function ReduxProvider(Component) {
    return (props) => (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...props} />
          </PersistGate>
        </Provider>
    );
  }