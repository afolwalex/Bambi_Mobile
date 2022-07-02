import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    TextInput,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Recharge = ({navigation}) => {
    const [mobile, setMobile] = useState('');
    const [amount, setAmount] = useState('');
    const [network, setNetwork] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{paddingBottom: 70}}
                showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.goBack(null)}
                            style={[
                                styles.round,
                                {borderColor: 'rgba(0, 0, 0, 0.5)'},
                            ]}>
                            <FontAwesome
                                name="angle-left"
                                color={'#2E3E5C'}
                                size={25}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text
                        style={[
                            styles.textBold,
                            {fontSize: 17, textTransform: 'capitalize'},
                        ]}>
                        Buy Recharge Card
                    </Text>
                    <View />
                </View>

                <View style={{marginTop: 30, paddingHorizontal: 20}}>
                    <Text style={styles.label}>Amount:</Text>
                    <TextInput
                        value={amount}
                        onChangeText={text => setAmount(text)}
                        style={styles.input}
                    />
                    <Text style={styles.label}>Network:</Text>
                    <TextInput
                        style={styles.input}
                        value={network}
                        onChangeText={text => setNetwork(text)}
                    />
                    <Text style={styles.label}>Phone Number:</Text>
                    <TextInput
                        style={styles.input}
                        value={mobile}
                        onChangeText={text => setMobile(text)}
                    />

                    <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                        <Text style={[styles.textBold, {color: '#fff'}]}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default Recharge;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#fff',
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
    position: {
        position: 'absolute',
        backgroundColor: '#4E51BF',
        bottom: 0,
        right: 0,
        height: 25,
        width: 25,
        borderRadius: 25 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        fontFamily: 'Inter-Black',
        color: '#425270',
        fontSize: 12,
        marginBottom: 5,
    },
    input: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#D0D0D0',
        height: 45,
        backgroundColor: '#fff',
        borderRadius: 10,
        color: '#425270',
        paddingLeft: 20,
        width: '100%',
    },
    click: {
        borderWidth: 1,
        borderColor: '#000',
        height: 25,
        width: 25,
        borderRadius: 25 / 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },
    btn: {
        backgroundColor: '#4E51BF',
        marginTop: 20,
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
    },
});
