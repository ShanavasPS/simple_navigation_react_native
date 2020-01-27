/**
 * @format
 */
import * as Constants from './constants'

export const INITIAL_STATE = {
  username: '',
  error: null,
}

export default rootReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Constants.LOGIN_GET_SUCCESS: {
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
        username: '',
      }
    }
    default: {
      return state
    }
  }
}