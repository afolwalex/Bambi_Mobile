import * as types from '../actions/types';

const intialState = {
    logged_in: false,
    user_details: null,
};

export const authReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.SIGN_IN:
            return {
                logged_in: true,
                user_details: action.payload,
            };
        case types.SIGN_OUT:
            return {
                logged_in: false,
                user_details: null,
            };
        default:
            return state;
    }
};
