import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer} from 'redux-persist';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';

const logger = createLogger();

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['auth', 'routeTheme'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const configureStore = () => {
    return createStore(
        persistedReducer,
        composeWithDevTools(applyMiddleware(...middleware, logger)),
    );
};

export default configureStore;
