import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
} from 'react-native';
import React from 'react';

const Login = ({navigation}) => {
    return (
        <ImageBackground
            source={require('../../../assets/images/bg.png')}
            style={{flex: 1}}
            resizeMode="cover">
            <Text>Login</Text>
            <TouchableOpacity onPress={() => navigation.navigate('App')}>
                <Text>Home</Text>
            </TouchableOpacity>
        </ImageBackground>
    );
};

export default Login;

const styles = StyleSheet.create({});
