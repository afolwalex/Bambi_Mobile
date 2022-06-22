import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenCover from '../../components/ScreenCover';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardTabs from './DashboardTabs';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                presentation: 'card',
            }}>
            <Stack.Screen name="Dashboard" component={DashboardTabs} />
        </Stack.Navigator>
    );
};

export default AppStack;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
