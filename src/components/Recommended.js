import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Food from '../../assets/images/food.svg';
import {entries} from '../utils/data';

const {width} = Dimensions.get('window');

const Recommended = ({navigation}) => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <View style={{flexDirection: 'row', marginVertical: 5}}>
                {entries.map(item => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('CourseDetail')}
                        key={item.id}
                        style={[styles.slide, {backgroundColor: item.bg}]}>
                        <View style={{alignItems: 'flex-end'}}>
                            <View
                                style={[
                                    styles.roll,
                                    {
                                        backgroundColor: item.color,
                                    },
                                ]}>
                                <Text
                                    style={[
                                        styles.text,
                                        {
                                            fontSize: 12,
                                            color: item.white
                                                ? '#fff'
                                                : '#1E3354',
                                        },
                                    ]}>
                                    {item.class}
                                </Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                width: '100%',
                                paddingHorizontal: 10,
                                paddingVertical: 20,
                            }}>
                            <View style={{width: '20%'}}>
                                <View
                                    style={{
                                        height: 40,
                                        width: 40,
                                        backgroundColor: '#fff',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        borderRadius: 20,
                                    }}>
                                    <Food />
                                </View>
                            </View>
                            <Text
                                style={[
                                    styles.text,
                                    {
                                        fontSize: 14,
                                        width: '80%',
                                        color: item.white
                                            ? 'rgba(0, 0, 0, 0.5)'
                                            : '#FFF',
                                        fontWeight: '600',
                                    },
                                ]}>
                                {item.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default Recommended;

const styles = StyleSheet.create({
    slide: {
        borderRadius: 6,
        width: 320,
        marginRight: 20,
    },
    roll: {
        fontSize: 12,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 6,
    },
    text: {
        fontFamily: 'Inter-Regular',
        color: '#1E3354',
    },
});
