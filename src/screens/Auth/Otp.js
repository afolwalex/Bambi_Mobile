import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Otp = () => {
    return (
        <ImageBackground
            source={require('../../../assets/images/bg.png')}
            style={{flex: 1}}
            resizeMode="cover">
            <Text>OTP</Text>
        </ImageBackground>
    );
};

export default Otp;

const styles = StyleSheet.create({});
