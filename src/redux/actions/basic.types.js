import * as types from './types';

export const startLoading = () => {
    return {
        type: types.START_LOADING,
    };
};

export const stopLoading = () => {
    return {
        type: types.STOP_LOADING,
    };
};

export const change_route_theme = (top, bottom) => {
    return {
        type: types.ROUTE_THEME,
        payload: {top, bottom},
    };
};
