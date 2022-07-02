import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const CourseDetail = ({navigation}) => {
    const content = [
        {id: 1, name: 'Welcome to the Course'},
        {id: 2, name: 'Design Thinking Intro'},
        {id: 3, name: 'Design Thinking Process'},
        {id: 4, name: 'Design Implementation Theory'},
    ];

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{paddingBottom: 70}}
                showsVerticalScrollIndicator={false}>
                <ImageBackground
                    source={require('../../../assets/images/bg-course.png')}
                    style={{height: 400}}>
                    <View style={styles.header}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.goBack(null)}
                            style={[styles.round, {borderColor: '#D0D0D0'}]}>
                            <FontAwesome
                                name="angle-left"
                                color={'#FFF'}
                                size={25}
                            />
                        </TouchableOpacity>
                        <Text
                            style={[
                                styles.textBold,
                                {
                                    fontSize: 17,
                                    textTransform: 'capitalize',
                                    color: '#ffffff',
                                },
                            ]}>
                            Course Details
                        </Text>
                        <View />
                    </View>
                    <View
                        style={{
                            maxWidth: '85%',
                            paddingHorizontal: 20,
                            marginTop: 20,
                        }}>
                        <Text
                            style={[
                                styles.textBold,
                                {color: '#fff', fontSize: 20},
                            ]}>
                            How to solve problems with design thinking.
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                marginTop: 8,
                            }}>
                            <Text style={[styles.text, {color: '#fff'}]}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Quis quis donec suspendisse
                                erat tristique elementum aliquet dignissim
                                vivamus. Felis nunc nibh eu bibendum. Commodo
                                commodo natoque nibh vel lorem donec. Mi cursus
                                non non mauris mi. Egestas hendrerit at...
                            </Text>
                            <TouchableOpacity activeOpacity={0.8}>
                                <Text style={[styles.text, {color: '#fff'}]}>
                                    read more
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: 5,
                            }}>
                            <View style={{flexDirection: 'row'}}>
                                <Feather
                                    name="play-circle"
                                    size={18}
                                    color="#FFE9CE"
                                />
                                <Text
                                    style={[
                                        styles.text,
                                        {
                                            color: '#FFE9CE',
                                            marginLeft: 5,
                                            fontWeight: '600',
                                        },
                                    ]}>
                                    18 videos
                                </Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginHorizontal: 20,
                                }}>
                                <FontAwesome
                                    name="tasks"
                                    size={18}
                                    color="#FFE9CE"
                                />
                                <Text
                                    style={[
                                        styles.text,
                                        {
                                            color: '#FFE9CE',
                                            marginLeft: 5,
                                            fontWeight: '600',
                                        },
                                    ]}>
                                    9 tasks
                                </Text>
                            </View>
                            <View>
                                <Text
                                    style={[
                                        styles.textBold,
                                        {color: '#FFE9CE'},
                                    ]}>
                                    Start from
                                </Text>
                                <Text
                                    style={[
                                        styles.textBold,
                                        {color: '#fff', fontSize: 18},
                                    ]}>
                                    200P
                                </Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{paddingHorizontal: 12, paddingVertical: 10}}>
                    <Text
                        style={[
                            styles.textBold,
                            {fontSize: 16, marginVertical: 10},
                        ]}>
                        Course Content
                    </Text>
                    <View>
                        {content.map(c => (
                            <View
                                key={c.id}
                                style={{
                                    flexDirection: 'row',
                                    borderBottomWidth: 1,
                                    borderBottomColor: '#EFEFEF',
                                    alignItems: 'center',
                                    paddingBottom: 10,
                                    marginBottom: 15,
                                }}>
                                <View style={styles.number}>
                                    <Text
                                        style={[
                                            styles.textBold,
                                            {fontSize: 16},
                                        ]}>
                                        {c.id}
                                    </Text>
                                </View>
                                <Text style={[styles.text, {fontSize: 15}]}>
                                    {c.name}
                                </Text>
                            </View>
                        ))}
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={[styles.textBold, {color: '#fff'}]}>
                            Get This Course
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default CourseDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingTop: 20,
    },
    round: {
        borderColor: '#4E51BF',
        borderWidth: 1,
        marginLeft: 10,
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 8,
    },
    text: {
        fontFamily: 'Inter-Regular',
        color: '#2E3E5C',
    },
    textBold: {
        fontFamily: 'Inter-Bold',
        color: '#2E3E5C',
    },
    number: {
        backgroundColor: '#F1F6FB',
        height: 35,
        width: 35,
        borderRadius: 35 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15,
    },
    btn: {
        backgroundColor: '#FF92A4',
        marginTop: 20,
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
    },
});
