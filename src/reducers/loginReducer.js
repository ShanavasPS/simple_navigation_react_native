/**
 * @format
 */
import * as Constants from '../../constants'

export const INITIAL_STATE = {
  username: '',
  error: null,
}

export default loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Constants.LOGIN_GET_SUCCESS_ASYNC: {
      return {
        ...state,
        error: null,
        username: action.username,
      }
    }
    case Constants.LOGIN_GET_ERROR: {
      return {
        ...state,
        error: null,
        username: null,
      }
    }
    case Constants.LOGOUT_GET_SUCCESS_ASYNC: {
      return {
        ...state,
        error: null,
        username: null,
      }
    }
    default: {
      return state
    }
  }
}