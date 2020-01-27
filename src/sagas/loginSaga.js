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
// Watcher: Increase Counter Async
export function* watchLoginUser() {
  // Take Last Action Only
  yield takeLatest(Constants.LOGIN_GET_SUCCESS, loginUser);
};