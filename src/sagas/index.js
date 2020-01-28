/**
 * @format
 */
// Imports: Dependencies
import { all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import { watchRegisterUser } from './registerSaga'
import { watchLoginUser, watchLogoutUser } from './loginSaga';
// Redux Saga: Root Saga
export function* rootSaga () {
  yield all([
    fork(watchRegisterUser),
    fork(watchLoginUser),
    fork(watchLogoutUser),
  ]);
};