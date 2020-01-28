/**
 * @format
 */
import * as Constants from '../../constants'
// Imports: Dependencies
import { takeEvery, takeLatest, put , call} from 'redux-saga/effects';
import { firebase } from '@react-native-firebase/auth';
import { goToHome } from "../../navigation"; // import the functions for loading the home screen

// Worker: Increase Counter Async (Delayed By 4 Seconds)
function* loginUser(userInfo) {
  try {
    // Dispatch Action To Redux Store
    yield loginFirebaseUser(userInfo)
    yield put({
      type: Constants.LOGIN_GET_SUCCESS_ASYNC,
      username: userInfo.username,
    });
    goToHome();
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

function* loginFirebaseUser({ username, password }) {
  const FirebaseAuth = firebase.auth()
  yield call([FirebaseAuth, FirebaseAuth.signInWithEmailAndPassword], username, password)
}

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