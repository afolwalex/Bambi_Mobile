import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

const RootNav = () => {
    const auth = useSelector(state => state.auth);
    const {user_details, logged_in} = auth;

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                presentation: 'card',
            }}>
            {user_details && logged_in ? (
                <Stack.Screen name="App" component={AppStack} />
            ) : (
                <Stack.Screen name="Auth" component={AuthStack} />
            )}
        </Stack.Navigator>
    );
};

export default RootNav;
