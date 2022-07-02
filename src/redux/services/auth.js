import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {Alert} from 'react-native';
import {config, url} from '../config';
import * as Navigation from '../../utils/navigation';
import {authHeader, headers} from '../headers';
import {sign_in, sign_out} from '../actions/auth.types';
import {
    change_route_theme,
    startLoading,
    stopLoading,
} from '../actions/basic.types';

export const loginUser = payload => {
    return async dispatch => {
        dispatch(startLoading());
        await axios
            .post(`${url}/users/login`, payload, {headers})
            .then(async res => {
                dispatch(stopLoading());
                dispatch(sign_in(res.data));
                dispatch(change_route_theme('#FFFFFF', '#FFFFFF'));
                await AsyncStorage.setItem(
                    '@user_token',
                    JSON.stringify(res.data.token),
                );
            })
            .catch(err => {
                Alert.alert('', err.response.data.message || 'Network Error');
                dispatch(stopLoading());
            });
    };
};

export const createUser = payload => {
    return async dispatch => {
        dispatch(startLoading());
        await axios
            .post(`${url}/users`, payload, {headers})
            .then(async res => {
                dispatch(stopLoading());
                Navigation.navigate('Login');
                Alert.alert(
                    '',
                    `Congrats, ${res.data.username}. Your account has been registered`,
                );
            })
            .catch(err => {
                Alert.alert('', err.response.data.message || 'Network Error');
                dispatch(stopLoading());
            });
    };
};

export const signOutUser = () => {
    return async dispatch => {
        dispatch(sign_out());
        dispatch(change_route_theme('#4E51BF', '#4E51BF'));
        await AsyncStorage.removeItem('@user_token');
        Navigation.navigate('Auth');
        Navigation.reset('Auth');
    };
};
