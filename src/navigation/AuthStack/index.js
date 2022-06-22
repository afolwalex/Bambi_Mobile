import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import ScreenCover from '../../components/ScreenCover';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/Auth/Login';
import SignUp from '../../screens/Auth/SignUp';
import ChangePassword from '../../screens/Auth/ChangePassword';
import Otp from '../../screens/Auth/Otp';
import ResetPassword from '../../screens/Auth/ResetPassword';

const Stack = createStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                presentation: 'card',
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={SignUp} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </Stack.Navigator>
    );
};

export default AuthStack;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
