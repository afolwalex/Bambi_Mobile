import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
    return (
        <View>
            <Text>Home</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Auth')}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({});
