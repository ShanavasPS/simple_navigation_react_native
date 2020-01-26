/**
 * @format
 */

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './reducer';

const store = createStore(rootReducer)

export default function ReduxProvider(Component) {
    return (props) => (
        <Provider store={store}>
            <Component {...props} />
        </Provider>
    );
}
