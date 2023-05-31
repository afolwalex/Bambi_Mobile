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
import mainStyles from '../../utils/mainStyles';

const PiggyBank = ({navigation}) => {
    const auth = useSelector(state => state.auth);
    const {user_details} = auth;

    return (
        <View style={mainStyles.container}>
            <ScrollView
                contentContainerStyle={{paddingBottom: 70}}
                showsVerticalScrollIndicator={false}>
                <View style={[mainStyles.header, {marginBottom: 0}]}>
                    <Text
                        style={[
                            mainStyles.txtBold,
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
                    <Text style={[mainStyles.txt, {marginRight: 5}]}>
                        Account Number:
                    </Text>
                    <TouchableOpacity
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text
                            style={[
                                mainStyles.txt,
                                {color: '#4E51BF', marginRight: 5},
                            ]}>
                            20399400490
                        </Text>
                        <Feather name="copy" color="#4E51BF" />
                        <Text style={[mainStyles.txt, {color: '#4E51BF'}]}>
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
                                mainStyles.txt,
                                {color: '#fff', marginBottom: 3},
                            ]}>
                            Wallet balance
                        </Text>
                        <Text
                            style={[
                                mainStyles.txtBold,
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
                        <Text style={[mainStyles.txtBold, {marginTop: 8}]}>
                            Send
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('FundWallet')}
                        style={{marginHorizontal: 10, alignItems: 'center'}}>
                        <AddIcon />
                        <Text style={[mainStyles.txtBold, {marginTop: 8}]}>
                            Add Money
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Recharge')}
                        style={{marginHorizontal: 10, alignItems: 'center'}}>
                        <RechargeIcon />
                        <Text style={[mainStyles.txtBold, {marginTop: 8}]}>
                            Recharge
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={mainStyles.head}>
                    <Text style={[mainStyles.txtBold]}>Saving goals</Text>
                    <TouchableOpacity>
                        <Text style={[mainStyles.txtBold, {color: '#FF92A4'}]}>
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
                                mainStyles.txtBold,
                                {color: '#FFF', marginBottom: 3},
                            ]}>
                            My own new gadget
                        </Text>
                        <Text
                            style={[
                                mainStyles.txt,
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
                <View style={mainStyles.head}>
                    <Text style={[mainStyles.txtBold]}>
                        Recent Transactions
                    </Text>
                    <TouchableOpacity>
                        <Text style={[mainStyles.txtBold, {color: '#FF92A4'}]}>
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
    round: {
        borderColor: '#4E51BF',
        borderWidth: 1,
        marginLeft: 10,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 8,
    },
    wallet: {
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: '#4E51BF',
        borderRadius: 10,
    },
});
