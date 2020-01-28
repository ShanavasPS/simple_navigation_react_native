/**
 * @format
 */
import * as Constants from '../../constants'
// Imports: Dependencies
import { takeLatest, put, call } from 'redux-saga/effects';
import { firebase } from '@react-native-firebase/auth';
import { goToHome } from "../../navigation"; // import the functions for loading the home screen

// Worker: Register a user using their email and password
function* registerUser(userInfo) {
  try {
    // Dispatch Action To Redux Store
    yield registerFirebaseUser(userInfo)
    yield put({
      type: Constants.REGISTER_USER_ASYNC,
      username: userInfo.email,
    });
  }
  catch (error) {
    console.log(error);
  }
};

function* registerFirebaseUser({ email, password }) {
  const FirebaseAuth = firebase.auth()
  yield call([FirebaseAuth, FirebaseAuth.createUserWithEmailAndPassword], email, password)
  yield call([FirebaseAuth, FirebaseAuth.signInWithEmailAndPassword], email, password)
  goToHome();
}

// Watcher: Register user Async
export function* watchRegisterUser() {
  // Take Last Action Only
  yield takeLatest(Constants.REGISTER_USER, registerUser);
};