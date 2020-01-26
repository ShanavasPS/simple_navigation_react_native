/**
 * @format
 */
import * as Constants from './constants'

export function loginGetSuccess(username) {
  return {
    type: Constants.LOGIN_GET_SUCCESS,
    username,
  }
}