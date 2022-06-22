import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import GiftIcon from '../../../assets/images/gift.svg';
import Recommended from '../../components/Recommended';

const Home = ({navigation}) => {
    const dispatch = useDispatch();

    const auth = useSelector(state => state.auth);
    const {user_details} = auth;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.textBold, {fontSize: 17}]}>
                    Hi, {user_details.username}
                </Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={[styles.round]}>
                        <Text style={[styles.text, {color: '#4E51BF'}]}>
                            🌟: 500P
                        </Text>
                    </View>
                    <TouchableOpacity
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
                        style={[styles.text, {color: '#fff', marginBottom: 3}]}>
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
            <Recommended />
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
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 20,
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 10,
    },
});
