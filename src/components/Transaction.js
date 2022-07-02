import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Transaction = ({detail}) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20,
                backgroundColor: '#F1F6FB',
                padding: 15,
                borderRadius: 15,
            }}>
            <View style={{width: '15%'}}>
                <Image source={require('../../assets/images/mtn.png')} />
            </View>
            <View style={{width: '70%'}}>
                <Text
                    style={[
                        styles.text,
                        {fontWeight: '600', color: '#2E3E5C', marginBottom: 3},
                    ]}>
                    {detail.to}
                </Text>
                <Text style={[styles.text, {color: '#FF92A4', fontSize: 12}]}>
                    {detail.date}
                </Text>
            </View>
            <Text
                style={[
                    styles.text,
                    {width: '15%', color: '#FF92A4', fontWeight: '600'},
                ]}>
                {detail.amount}
            </Text>
        </View>
    );
};

export default Transaction;

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Inter-Regular',
    },
});
