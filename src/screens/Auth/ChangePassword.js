import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ChangePassword = () => {
    return (
        <ImageBackground
            source={require('../../../assets/images/bg.png')}
            style={{flex: 1}}
            resizeMode="cover">
            <Text>Change Password</Text>
        </ImageBackground>
    );
};

export default ChangePassword;

const styles = StyleSheet.create({});
