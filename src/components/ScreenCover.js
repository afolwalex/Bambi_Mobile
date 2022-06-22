import {StyleSheet, SafeAreaView, View} from 'react-native';
import React from 'react';

const ScreenCover = ({children, color}) => {
    return (
        <>
            {/* <SafeAreaView
                style={{
                    flex: 0,
                    backgroundColor: 'red',
                }}
            />
            <SafeAreaView
                style={[
                    styles.container,
                    {
                        backgroundColor: color,
                    },
                ]}>
                {children}
            </SafeAreaView> */}
            <View style={styles.container}>{children}</View>
        </>
    );
};

export default ScreenCover;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
