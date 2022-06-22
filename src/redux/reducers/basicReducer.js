import * as types from '../actions/types';

const initialThemeState = {
    top: '#4E51BF',
    body: '#4E51BF',
};

export const routeThemeReducer = (state = initialThemeState, action) => {
    switch (action.type) {
        case types.ROUTE_THEME:
            return {top: action.payload.top, body: action.payload.body};
        default:
            return state;
    }
};

export const loadingReducer = (state = {loading: false}, action) => {
    switch (action.type) {
        case types.START_LOADING:
            return {
                loading: true,
            };
        case types.STOP_LOADING:
            return {
                loading: false,
            };
        default:
            return state;
    }
};
