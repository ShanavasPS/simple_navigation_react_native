/**
 * @format
 */
import * as Constants from '../../constants'
// Imports: Dependencies
import { delay, takeEvery, takeLatest, put } from 'redux-saga/effects';
// Worker: Increase Counter Async (Delayed By 4 Seconds)
function* loginUser(username) {
  try {
    // Dispatch Action To Redux Store
    yield put({
      type: Constants.LOGIN_GET_SUCCESS_ASYNC,
      username: username,
    });
  }
  catch (error) {
    console.log(error);
  }
};
// Watcher: Login user Async
export function* watchLoginUser() {
  // Take Last Action Only
  yield takeLatest(Constants.LOGIN_GET_SUCCESS, loginUser);
};

function* logoutUser() {
  try {
    // Dispatch Action To Redux Store
    yield put({
      type: Constants.LOGOUT_GET_SUCCESS_ASYNC,
      username: null,
    });
  }
  catch (error) {
    console.log(error);
  }
};
// Watcher: Logout User Async
export function* watchLogoutUser() {
  // Take Every Action 
  yield takeEvery(Constants.LOGOUT_GET_SUCCESS, logoutUser);
};