import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import GiftIcon from '../../../assets/images/gift.svg';
import SendIcon from '../../../assets/images/Send-Icon.svg';
import AddIcon from '../../../assets/images/Add-Icon.svg';
import RechargeIcon from '../../../assets/images/recharge-icon.svg';
import {transactions} from '../../utils/data';
import Transaction from '../../components/Transaction';

const PiggyBank = ({navigation}) => {
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
                            onPress={() => navigation.navigate('Notifications')}
                            style={[
                                styles.round,
                                {borderColor: 'rgba(0, 0, 0, 0.5)'},
                            ]}>
                            <Feather name="bell" color={'#2E3E5C'} size={22} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.text, {marginRight: 5}]}>
                        Account Number:
                    </Text>
                    <TouchableOpacity
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text
                            style={[
                                styles.text,
                                {color: '#4E51BF', marginRight: 5},
                            ]}>
                            20399400490
                        </Text>
                        <Feather name="copy" color="#4E51BF" />
                        <Text style={[styles.text, {color: '#4E51BF'}]}>
                            copy
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.wallet}>
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
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginTop: 15,
                    }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Transfer')}
                        style={{marginHorizontal: 10, alignItems: 'center'}}>
                        <SendIcon />
                        <Text style={[styles.textBold, {marginTop: 8}]}>
                            Send
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('FundWallet')}
                        style={{marginHorizontal: 10, alignItems: 'center'}}>
                        <AddIcon />
                        <Text style={[styles.textBold, {marginTop: 8}]}>
                            Add Money
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Recharge')}
                        style={{marginHorizontal: 10, alignItems: 'center'}}>
                        <RechargeIcon />
                        <Text style={[styles.textBold, {marginTop: 8}]}>
                            Recharge
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.head}>
                    <Text style={[styles.textBold]}>Saving goals</Text>
                    <TouchableOpacity>
                        <Text style={[styles.textBold, {color: '#FF92A4'}]}>
                            View all
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        backgroundColor: '#FF92A4',
                        padding: 30,
                        flexDirection: 'row',
                        borderRadius: 16,
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
                    <View style={{width: '70%', marginLeft: 20}}>
                        <Text
                            style={[
                                styles.textBold,
                                {color: '#FFF', marginBottom: 3},
                            ]}>
                            My own new gadget
                        </Text>
                        <Text
                            style={[
                                styles.text,
                                {color: '#FFF', marginBottom: 4, fontSize: 13},
                            ]}>
                            ₦56,000/₦122,000
                        </Text>
                        <View
                            style={{
                                height: 7,
                                width: '100%',
                                backgroundColor: '#4E51BF',
                                borderRadius: 5,
                            }}>
                            <View
                                style={{
                                    height: 7,
                                    width: '60%',
                                    backgroundColor: '#FFE9CE',
                                    borderRadius: 5,
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.head}>
                    <Text style={[styles.textBold]}>Recent Transactions</Text>
                    <TouchableOpacity>
                        <Text style={[styles.textBold, {color: '#FF92A4'}]}>
                            View all
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    {transactions.map(t => (
                        <Transaction detail={t} key={t.id} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default PiggyBank;

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
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 10,
    },
});
