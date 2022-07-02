import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CourseB = ({course, navigation}) => {
    return (
        <TouchableOpacity
            style={styles.cover}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('CourseDetail')}>
            <View style={{alignItems: 'center'}}>
                <Image
                    source={require('../../assets/images/Layer.png')}
                    resizeMode="contain"
                    style={{height: 150}}
                />
            </View>
            <Text
                style={[
                    styles.text,
                    {fontWeight: '600', marginVertical: 10, fontSize: 16},
                ]}>
                {course.title}
            </Text>
            <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                    <Feather name="play-circle" size={18} color="#FFE9CE" />
                    <Text
                        style={[
                            styles.text,
                            {
                                color: '#FFE9CE',
                                marginLeft: 5,
                                fontWeight: '600',
                            },
                        ]}>
                        {course.videos} videos
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome name="tasks" size={18} color="#FFE9CE" />
                    <Text
                        style={[
                            styles.text,
                            {
                                color: '#FFE9CE',
                                marginLeft: 5,
                                fontWeight: '600',
                            },
                        ]}>
                        {course.task} tasks
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default CourseB;

const styles = StyleSheet.create({
    cover: {
        backgroundColor: '#4E51BF',
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 15,
        width: 250,
        marginRight: 20,
    },
    text: {
        fontFamily: 'Inter-Regular',
        color: '#fff',
    },
});
