import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

const Loader = () => {
    return (
        <AnimatedLoader
            visible={true}
            overlayColor="rgba(0,0,0,0.75)"
            source={require('../../assets/94391-red-colour-loading-animation.json')}
            animationStyle={styles.lottie}
            speed={1}
        />
    );
};

const styles = StyleSheet.create({
    lottie: {
        width: 60,
        height: 60,
    },
});

export default Loader;
