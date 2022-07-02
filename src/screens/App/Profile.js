import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TextInput,
    Image,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import GiftIcon from '../../../assets/images/gift.svg';
import CourseIcon from '../../../assets/images/course.svg';
import HistoryIcon from '../../../assets/images/history.svg';
import NotificationIcon from '../../../assets/images/notification.svg';
import StatsIcon from '../../../assets/images/stats.svg';
import PiggyIcon from '../../../assets/images/piggy.svg';

const Profile = ({navigation}) => {
    const auth = useSelector(state => state.auth);
    const {user_details} = auth;

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{paddingBottom: 70}}
                showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View />
                    <Text
                        style={[
                            styles.textBold,
                            {fontSize: 17, textTransform: 'capitalize'},
                        ]}>
                        My Profile
                    </Text>
                    <View style={{flexDirection: 'row'}}>
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
                <View style={{alignItems: 'center'}}>
                    <View
                        style={{
                            borderColor: '#FF92A4',
                            borderWidth: 1,
                            padding: 7,
                            borderRadius: 40,
                        }}>
                        <Image
                            source={require('../../../assets/images/user.png')}
                            style={{height: 100, width: 100, borderRadius: 20}}
                        />
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginVertical: 10,
                            alignItems: 'center',
                        }}>
                        <Text style={[styles.textBold, {fontSize: 16}]}>
                            {user_details.name}
                        </Text>
                        <Text
                            style={[
                                styles.text,
                                {color: '#FF92A4', marginLeft: 10},
                            ]}>
                            Lagos
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginVertical: 10,
                            alignItems: 'center',
                            backgroundColor: '#FF92A4',
                            padding: 15,
                            borderRadius: 14,
                        }}>
                        <View
                            style={{
                                paddingHorizontal: 10,
                                borderRightWidth: 1,
                                borderRightColor: 'rgba(255, 255, 255, 0.5)',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={[
                                    styles.textBold,
                                    {color: '#fff', fontSize: 13},
                                ]}>
                                17,000
                            </Text>
                            <Text
                                style={[
                                    styles.text,
                                    {color: '#FFF', fontSize: 13},
                                ]}>
                                total points
                            </Text>
                        </View>
                        <View
                            style={{
                                paddingHorizontal: 10,
                                borderRightWidth: 1,
                                borderRightColor: 'rgba(255, 255, 255, 0.5)',
                                alignItems: 'center',
                            }}>
                            <Text
                                style={[
                                    styles.textBold,
                                    {color: '#fff', fontSize: 13},
                                ]}>
                                1,200
                            </Text>
                            <Text
                                style={[
                                    styles.text,
                                    {color: '#FFF', fontSize: 13},
                                ]}>
                                world rank
                            </Text>
                        </View>
                        <View
                            style={{
                                paddingLeft: 10,
                                alignItems: 'center',
                            }}>
                            <Text
                                style={[
                                    styles.textBold,
                                    {color: '#fff', fontSize: 13},
                                ]}>
                                108
                            </Text>
                            <Text
                                style={[
                                    styles.text,
                                    {color: '#FFF', fontSize: 13},
                                ]}>
                                local rank
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                        marginVertical: 10,
                    }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('EditProfile')}
                        style={{
                            width: '80%',
                            backgroundColor: '#4E51BF',
                            alignItems: 'center',
                            paddingVertical: 12,
                            borderRadius: 10,
                        }}>
                        <Text style={[styles.textBold, {color: '#fff'}]}>
                            Edit Profile
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Settings')}
                        style={{
                            backgroundColor: '#FF92A4',
                            width: '15%',
                            alignItems: 'center',
                            paddingVertical: 12,
                            borderRadius: 10,
                        }}>
                        <Ionicons name="settings" color="#fff" size={20} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.wallet} activeOpacity={0.8}>
                    <View
                        style={{
                            width: '75%',
                            backgroundColor: '#4E51BF',
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                            paddingHorizontal: 15,
                            paddingVertical: 15,
                        }}>
                        <Text
                            style={[
                                styles.textBold,
                                {color: '#fff', marginBottom: 3, fontSize: 15},
                            ]}>
                            Leaderboard
                        </Text>
                        <Text
                            style={[
                                styles.text,
                                {color: '#fff', marginBottom: 3},
                            ]}>
                            Get inspired by those on the leaderboard
                        </Text>
                    </View>
                    <View
                        style={{
                            width: '25%',
                            backgroundColor: '#FF92A4',
                            borderBottomLeftRadius: 70,
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
                </TouchableOpacity>
                <View style={{marginTop: 20}}>
                    <TouchableOpacity style={styles.link} activeOpacity={0.8}>
                        <View style={styles.icon}>
                            <CourseIcon />
                        </View>
                        <Text style={[styles.textBold, {fontSize: 16}]}>
                            My Courses
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.link} activeOpacity={0.8}>
                        <View style={styles.icon}>
                            <StatsIcon />
                        </View>
                        <Text style={[styles.textBold, {fontSize: 16}]}>
                            View Stats
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.link} activeOpacity={0.8}>
                        <View style={styles.icon}>
                            <HistoryIcon />
                        </View>
                        <Text style={[styles.textBold, {fontSize: 16}]}>
                            Tasks History
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.link} activeOpacity={0.8}>
                        <View style={styles.icon}>
                            <NotificationIcon />
                        </View>
                        <Text style={[styles.textBold, {fontSize: 16}]}>
                            Notifications Settings
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.link} activeOpacity={0.8}>
                        <View style={styles.icon}>
                            <PiggyIcon />
                        </View>
                        <Text style={[styles.textBold, {fontSize: 16}]}>
                            Piggybank Settings
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default Profile;

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
        marginBottom: 20,
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
        backgroundColor: '#4E51BF',
        borderRadius: 10,
        marginTop: 5,
    },
    icon: {
        backgroundColor: '#4E51BF',
        padding: 10,
        borderRadius: 10,
        marginRight: 15,
    },
    link: {
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
