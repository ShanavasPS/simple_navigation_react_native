/**
 * @format
 */
import React from "react";
import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';

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

const persistor = persistStore(store)

export default function ReduxProvider(Component) {
    return (props) => (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...props} />
          </PersistGate>
        </Provider>
    );
  }