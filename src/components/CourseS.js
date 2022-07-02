import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Food from '../../assets/images/food.svg';
import {useDispatch} from 'react-redux';
import {change_route_theme} from '../redux/actions/basic.types';

const CourseS = ({course, navigation}) => {
    const dispatch = useDispatch();

    const goTo = () => {
        //dispatch(change_route_theme('#FFFFFF', '#FFFFFF'));
        navigation.navigate('CourseDetail');
    };

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={goTo}
            style={[styles.slide, {backgroundColor: '#F1F6FB'}]}>
            <View style={{alignItems: 'flex-end'}}>
                <View
                    style={[
                        styles.roll,
                        {
                            backgroundColor: '#FFE9CE',
                        },
                    ]}>
                    <Text
                        style={[
                            styles.text,
                            {
                                fontSize: 12,
                                color: '#1E3354',
                            },
                        ]}>
                        {course.level}
                    </Text>
                </View>
            </View>
            <View style={{paddingHorizontal: 15, paddingBottom: 15}}>
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
                <Text style={[styles.text, {marginTop: 20, fontWeight: '600'}]}>
                    {course.title}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default CourseS;

const styles = StyleSheet.create({
    slide: {
        borderRadius: 15,
        width: '48%',
        marginBottom: 15,
    },
    roll: {
        fontSize: 12,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 15,
    },
    text: {
        fontFamily: 'Inter-Regular',
        color: '#1E3354',
    },
});
