/**
 * @format
 */
// Imports: Dependencies
import { combineReducers } from 'redux';
// Imports: Reducers
import loginReducer from './loginReducer';
// Redux: Root Reducer
const rootReducer = combineReducers({
  login: loginReducer,
});
// Exports
export default rootReducer;