import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/App/Home';

import HomeIcon from '../../../assets/images/Home.svg';
import LearnIcon from '../../../assets/images/Learn.svg';
import BankIcon from '../../../assets/images/Bank.svg';
import ProfileIcon from '../../../assets/images/Profile.svg';
import ScreenCover from '../../components/ScreenCover';

const Tab = createBottomTabNavigator();

const DashboardTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: '#4E51BF',
                tabBarInactiveTintColor: 'rgba(0,0,0,0.5)',
                tabBarStyle: {
                    position: 'absolute',
                    right: 15,
                    left: 15,
                    bottom: 15,
                    borderRadius: 10,
                    height: 60,
                },
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => <HomeIcon style={{color}} />,
                    tabBarLabelStyle: {
                        fontWeight: '600',
                        fontFamily: 'Inter-Black',
                    },
                    tabBarItemStyle: {
                        bottom: 3,
                    },
                }}
            />
            <Tab.Screen
                name="Learn"
                component={Home}
                options={{
                    tabBarLabel: 'Learn',
                    tabBarIcon: ({color}) => <LearnIcon style={{color}} />,
                    tabBarLabelStyle: {
                        fontWeight: '600',
                    },
                    tabBarItemStyle: {
                        bottom: 3,
                    },
                }}
            />
            <Tab.Screen
                name="Bank"
                component={Home}
                options={{
                    tabBarLabel: 'Piggybank',
                    tabBarIcon: ({color}) => <BankIcon style={{color}} />,
                    tabBarLabelStyle: {
                        fontWeight: '600',
                    },
                    tabBarItemStyle: {
                        bottom: 3,
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Home}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({color}) => <ProfileIcon style={{color}} />,
                    tabBarLabelStyle: {
                        fontWeight: '600',
                    },
                    tabBarItemStyle: {
                        bottom: 3,
                    },
                }}
            />
        </Tab.Navigator>
    );
};

export default DashboardTabs;

const styles = StyleSheet.create({});
