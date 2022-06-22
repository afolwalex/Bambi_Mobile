import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {loadingReducer, routeThemeReducer} from './basicReducer';

const reducer = combineReducers({
    routeTheme: routeThemeReducer,
    uiLoader: loadingReducer,
    auth: authReducer,
});

export default reducer;
