import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';

const SignUp = () => {
    return (
        <ImageBackground
            source={require('../../../assets/images/bg.png')}
            style={{flex: 1}}
            resizeMode="cover">
            <Text>SignUp</Text>
        </ImageBackground>
    );
};

export default SignUp;

const styles = StyleSheet.create({});
