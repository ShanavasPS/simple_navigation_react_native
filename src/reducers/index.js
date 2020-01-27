/**
 * @format
 */
// Imports: Dependencies
import { combineReducers } from 'redux';
import { AsyncStorage } from 'react-native'
import { persistReducer } from 'redux-persist';
// Imports: Reducers
import loginReducer from './loginReducer';

export const appPersistConfig = {
    key: 'app',
    storage: AsyncStorage,
  }

// Redux: Root Reducer
const rootReducer = combineReducers({
  login: persistReducer(appPersistConfig,loginReducer)
});
// Exports
export default rootReducer;