import * as types from './types';

export const sign_in = payload => {
    return {
        type: types.SIGN_IN,
        payload,
    };
};

export const sign_out = () => {
    return {
        type: types.SIGN_OUT,
    };
};

export const user_profile = payload => {
    return {
        type: types.USER_DATA,
        payload,
    };
};
