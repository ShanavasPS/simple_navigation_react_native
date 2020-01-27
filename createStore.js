/**
 * @format
 */

import React from "react";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './src/reducers'
import createSagaMiddleware from 'redux-saga';
// Imports: Redux Root Saga
import { rootSaga } from './src/sagas';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Redux: Store
const store = createStore(
    rootReducer,
    applyMiddleware(
      sagaMiddleware
    ),
  );

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

export default function ReduxProvider(Component) {
    return (props) => (
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    );
}