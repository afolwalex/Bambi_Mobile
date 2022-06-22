import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/App/Home';
import Learn from '../../screens/App/Learn';
import PiggyBank from '../../screens/App/PiggyBank';
import Profile from '../../screens/App/Profile';

import HomeIcon from '../../../assets/images/Home.svg';
import LearnIcon from '../../../assets/images/Learn.svg';
import BankIcon from '../../../assets/images/Bank.svg';
import ProfileIcon from '../../../assets/images/Profile.svg';

const Tab = createBottomTabNavigator();

const DashboardTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            sceneContainerStyle={{backgroundColor: '#FFFFFF'}}
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
                    elevation: 2,
                    shadowRadius: 1,
                    shadowOpacity: 0.2,
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                },
            }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => <HomeIcon style={{color}} />,
                    tabBarLabelStyle: {
                        fontFamily: 'Inter-Bold',
                    },
                    tabBarItemStyle: {
                        bottom: 3,
                    },
                }}
            />
            <Tab.Screen
                name="Learn"
                component={Learn}
                options={{
                    tabBarLabel: 'Learn',
                    tabBarIcon: ({color}) => <LearnIcon style={{color}} />,
                    tabBarLabelStyle: {
                        fontFamily: 'Inter-Bold',
                    },
                    tabBarItemStyle: {
                        bottom: 3,
                    },
                }}
            />
            <Tab.Screen
                name="Bank"
                component={PiggyBank}
                options={{
                    tabBarLabel: 'Piggybank',
                    tabBarIcon: ({color}) => <BankIcon style={{color}} />,
                    tabBarLabelStyle: {
                        fontFamily: 'Inter-Bold',
                    },
                    tabBarItemStyle: {
                        bottom: 3,
                    },
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({color}) => <ProfileIcon style={{color}} />,
                    tabBarLabelStyle: {
                        fontFamily: 'Inter-Bold',
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
