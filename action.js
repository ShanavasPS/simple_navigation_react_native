/**
 * @format
 */
import * as Constants from './constants'

export function loginGetSuccess(username) {
  return {
    type: Constants.LOGIN_GET_SUCCESS,
    ...username,
  }
}

export function registerUserSuccess(userInfo) {
  return {
    type: Constants.REGISTER_USER,
    ...userInfo,
  }
}