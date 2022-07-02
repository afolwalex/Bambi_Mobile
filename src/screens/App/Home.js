import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import GiftIcon from '../../../assets/images/gift.svg';
import Food from '../../../assets/images/food.svg';
import Recommended from '../../components/Recommended';
import {assigned_tasks, courses} from '../../utils/data';
import CourseS from '../../components/CourseS';

const Home = ({navigation}) => {
    const auth = useSelector(state => state.auth);
    const {user_details} = auth;

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{paddingBottom: 70}}
                showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text
                        style={[
                            styles.textBold,
                            {fontSize: 17, textTransform: 'capitalize'},
                        ]}>
                        Hi, {user_details.username}
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate('Points')}
                            style={[styles.round]}>
                            <Text style={[styles.text, {color: '#4E51BF'}]}>
                                🌟: 500P
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate('Notifications')}
                            style={[
                                styles.round,
                                {borderColor: 'rgba(0, 0, 0, 0.5)'},
                            ]}>
                            <Feather name="bell" color={'#2E3E5C'} size={22} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.wallet}>
                    <View
                        style={{
                            width: '75%',
                            backgroundColor: '#4E51BF',
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                            paddingHorizontal: 15,
                            paddingVertical: 7,
                        }}>
                        <Text
                            style={[
                                styles.text,
                                {color: '#fff', marginBottom: 3},
                            ]}>
                            Wallet balance
                        </Text>
                        <Text
                            style={[
                                styles.textBold,
                                {color: '#fff', marginBottom: 3, fontSize: 17},
                            ]}>
                            ₦7,500.23
                        </Text>
                        <TouchableOpacity>
                            <Text style={[styles.text, {color: '#fff'}]}>
                                View wallet {'>'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            width: '25%',
                            backgroundColor: '#FF92A4',
                            borderBottomLeftRadius: 60,
                            borderTopLeftRadius: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                        }}>
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#fff',
                                height: 40,
                                width: 40,
                                borderRadius: 20,
                            }}>
                            <GiftIcon />
                        </View>
                    </View>
                </View>
                <View style={styles.head}>
                    <Text style={[styles.textBold]}>Recommended for you</Text>
                    <TouchableOpacity>
                        <Text style={[styles.textBold, {color: '#FF92A4'}]}>
                            View more
                        </Text>
                    </TouchableOpacity>
                </View>
                <Recommended navigation={navigation} />
                <View style={styles.head}>
                    <Text style={[styles.textBold]}>Assigned tasks</Text>
                    <TouchableOpacity>
                        <Text style={[styles.textBold, {color: '#FF92A4'}]}>
                            View more
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Task')}
                    style={[styles.box, {backgroundColor: '#4E51BF'}]}>
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
                    <View style={{width: '80%'}}>
                        <Text style={[styles.text, {color: '#fff'}]}>
                            7 tasks done
                        </Text>
                        <Text
                            style={[
                                styles.textBold,
                                {color: '#fff', marginTop: 5},
                            ]}>
                            15 tasks assignes
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Quiz')}
                    activeOpacity={0.8}
                    style={[styles.box, {backgroundColor: '#4E51BF'}]}>
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
                    <View style={{width: '80%'}}>
                        <Text style={[styles.text, {color: '#fff'}]}>
                            Test/increase your knowledge
                        </Text>
                        <Text
                            style={[
                                styles.textBold,
                                {color: '#fff', marginTop: 5},
                            ]}>
                            Take a Quiz
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.head}>
                    <Text style={[styles.textBold]}>
                        Join a community challenge
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        backgroundColor: '#4E51BF',
                        borderRadius: 8,
                        position: 'relative',
                    }}>
                    <View
                        style={{
                            backgroundColor: '#4E51BF',
                            width: '45%',
                            paddingHorizontal: 20,
                            paddingVertical: 15,
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderBottomLeftRadius: 8,
                            borderTopLeftRadius: 8,
                        }}>
                        <Image
                            source={require('../../../assets/images/user.png')}
                            style={{
                                height: 60,
                                width: 60,
                                borderWidth: 1,
                                borderColor: '#FF92A4',
                                borderRadius: 10,
                                marginRight: 10,
                            }}
                        />
                        <Text style={[styles.text, {color: '#fff'}]}>You</Text>
                    </View>
                    <View
                        style={{
                            backgroundColor: '#FF92A4',
                            width: '55%',
                            paddingLeft: 40,
                            paddingVertical: 15,
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderBottomRightRadius: 8,
                            borderTopRightRadius: 8,
                            borderTopLeftRadius: 40,
                            borderBottomLeftRadius: 40,
                        }}>
                        <View
                            style={{
                                height: 60,
                                width: 60,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#FFE9CE',
                                borderColor: 'rgba(0,0,0,0.5)',
                                borderRadius: 10,
                                marginRight: 10,
                                borderWidth: 1,
                            }}>
                            <Text style={[styles.text]}>???</Text>
                        </View>
                        <Text style={[styles.text, {color: '#fff'}]}>???</Text>
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            right: '50%',
                            top: 25,
                            backgroundColor: '#FFF',
                            height: 40,
                            width: 40,
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Text style={[styles.textBold]}>VS</Text>
                    </View>
                </View>
                <View style={styles.head}>
                    <Text style={[styles.textBold]}>Popular Courses</Text>
                    <TouchableOpacity>
                        <Text style={[styles.textBold, {color: '#FF92A4'}]}>
                            View more
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        marginBottom: 20,
                    }}>
                    {courses.map(c => (
                        <CourseS
                            course={c}
                            key={c.id}
                            navigation={navigation}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    round: {
        borderColor: '#4E51BF',
        borderWidth: 1,
        marginLeft: 10,
        paddingHorizontal: 5,
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
    wallet: {
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: '#4E51BF',
        borderRadius: 10,
    },
    box: {
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginBottom: 10,
        flexDirection: 'row',
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 10,
    },
});
