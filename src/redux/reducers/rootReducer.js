import {combineReducers} from 'redux';
import {routeThemeReducer} from './basicReducer';

const reducer = combineReducers({
    routeTheme: routeThemeReducer,
});

export default reducer;
