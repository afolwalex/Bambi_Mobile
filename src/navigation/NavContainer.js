import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../utils/navigation';
import RootNav from './RootNav';
import {useSelector} from 'react-redux';

const NavContainer = () => {
    const routeTheme = useSelector(state => state.routeTheme);
    const {top, body} = routeTheme;

    return (
        <NavigationContainer ref={navigationRef}>
            <SafeAreaView
                style={{
                    flex: 0,
                    backgroundColor: top ? top : '#FFFFFF',
                }}
            />
            <SafeAreaView
                style={[
                    styles.container,
                    {
                        backgroundColor: body ? body : '#FFFFFF',
                    },
                ]}>
                <RootNav />
            </SafeAreaView>
            <StatusBar
                barStyle={top === '#FFFFFF' ? 'dark-content' : 'light-content'}
            />
        </NavigationContainer>
    );
};

export default NavContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
});
