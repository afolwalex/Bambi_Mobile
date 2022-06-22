import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ResetPassword = () => {
    return (
        <ImageBackground
            source={require('../../../assets/images/bg.png')}
            style={{flex: 1}}
            resizeMode="cover">
            <Text>Reset</Text>
        </ImageBackground>
    );
};

export default ResetPassword;

const styles = StyleSheet.create({});
