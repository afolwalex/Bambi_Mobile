import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Feather from 'react-native-vector-icons/Feather';
import KeyIcon from '../../../assets/images/email.svg';
import {useDispatch} from 'react-redux';
import ResetIcon from '../../../assets/images/reset.svg';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const ResetPassword = ({navigation}) => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [code, setCode] = useState('');

    const submitHandler = () => {
        if (!confirmed) {
            setConfirmed(true);
        } else {
            navigation.navigate('ChangePassword');
        }
    };

    return (
        <ImageBackground
            source={require('../../../assets/images/bg.png')}
            style={{flex: 1}}
            resizeMode="cover">
            <View style={{flex: 1}}>
                <KeyboardAwareScrollView
                    enableAutomaticScroll={true}
                    showsVerticalScrollIndicator={false}
                    enableOnAndroid={true}
                    keyboardShouldPersistTaps="handled">
                    <View style={{marginTop: '45%', paddingHorizontal: '4%'}}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 50,
                            }}>
                            <Text
                                style={[
                                    styles.textBold,
                                    {fontSize: 22, color: '#FFFEFE'},
                                ]}>
                                Reset Password
                            </Text>
                            {!confirmed ? (
                                <Text
                                    style={[
                                        styles.text,
                                        {
                                            color: '#FFFEFE',
                                            marginTop: 20,
                                            fontSize: 13,
                                        },
                                    ]}>
                                    Enter the email associated with your account
                                    and we will send a 4 Digit code to confirm
                                    your account.
                                </Text>
                            ) : (
                                <View
                                    style={{
                                        marginTop: 20,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                    <View
                                        style={[
                                            styles.round,
                                            {
                                                height: 80,
                                                width: 80,
                                                borderRadius: 40,
                                            },
                                        ]}>
                                        <ResetIcon />
                                    </View>
                                    <Text
                                        style={[
                                            styles.text,
                                            {
                                                color: '#FFFEFE',
                                                marginTop: 20,
                                                textAlign: 'center',
                                                fontSize: 14,
                                            },
                                        ]}>
                                        An email has been sent with a 4 Digit
                                        code. Please enter code sent to your
                                        email to confirm the password reset
                                    </Text>
                                </View>
                            )}
                        </View>
                        {!confirmed ? (
                            <View style={styles.inputField}>
                                <TextInput
                                    style={styles.input}
                                    value={email}
                                    onChangeText={text => setEmail(text)}
                                    placeholder="Email Address"
                                    placeholderTextColor={'#D0D0D0'}
                                />
                                <View style={[styles.set1, {top: 15}]}>
                                    <KeyIcon />
                                </View>
                            </View>
                        ) : (
                            <View style={{marginHorizontal: '12%'}}>
                                <OTPInputView
                                    style={{height: 100}}
                                    pinCount={4}
                                    code={code}
                                    autoFocusOnLoad={false}
                                    onCodeChanged={code => setCode(code)}
                                    codeInputFieldStyle={{
                                        backgroundColor: 'transparent',
                                        color: 'rgba(241, 246, 251, 0.8)',
                                        borderColor: '#F1F6FB',
                                        borderRadius: 10,
                                    }}
                                    codeInputHighlightStyle={
                                        styles.underlineStyleHighLighted
                                    }
                                    onCodeFilled={code => {
                                        console.log(code);
                                        navigation.navigate('ChangePassword');
                                    }}
                                    secureTextEntry={true}
                                />
                            </View>
                        )}

                        <View style={{marginTop: 50}}>
                            {!confirmed && (
                                <View
                                    style={{
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                    }}>
                                    <Text
                                        style={[
                                            styles.text,
                                            {
                                                color: 'rgba(241, 246, 251, 0.8)',
                                                marginRight: 10,
                                            },
                                        ]}>
                                        Remember Password?
                                    </Text>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        onPress={() =>
                                            navigation.navigate('Login')
                                        }
                                        style={{
                                            borderBottomColor: '#FF92A4',
                                            borderBottomWidth: 1,
                                        }}>
                                        <Text
                                            style={[
                                                styles.textBold,
                                                {color: '#FF92A4'},
                                            ]}>
                                            Login
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                            <View style={{marginTop: 20, marginBottom: 20}}>
                                <TouchableOpacity
                                    style={styles.btn}
                                    onPress={submitHandler}
                                    activeOpacity={0.8}>
                                    <Text
                                        style={[
                                            styles.textBold,
                                            {color: '#2E3E5C'},
                                        ]}>
                                        {confirmed ? 'Submit' : 'Send'} Code
                                    </Text>
                                    <Feather
                                        name="arrow-right"
                                        size={22}
                                        color={'#2E3E5C'}
                                        style={styles.set2}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </ImageBackground>
    );
};

export default ResetPassword;

const styles = StyleSheet.create({
    inputField: {
        marginBottom: 25,
        position: 'relative',
    },
    input: {
        width: '100%',
        borderColor: '#F1F6FB',
        borderWidth: 1,
        height: 50,
        borderRadius: 8,
        paddingLeft: 40,
        color: 'rgba(241, 246, 251, 0.8)',
        fontFamily: 'Inter-Regular',
    },
    set1: {
        position: 'absolute',
        left: 10,
        top: 19,
    },
    set2: {
        position: 'absolute',
        right: 10,
        top: 16,
    },
    text: {
        fontFamily: 'Inter-Regular',
        color: 'rgba(241, 246, 251, 0.8)',
    },
    textBold: {
        fontFamily: 'Inter-Bold',
        color: 'rgba(241, 246, 251, 0.8)',
    },
    round: {
        backgroundColor: '#F1F6FB',
        height: 36,
        width: 36,
        borderRadius: 18,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    line: {
        height: 1,
        width: 50,
        backgroundColor: '#F1F6FB',
        marginHorizontal: 10,
    },
    btn: {
        backgroundColor: '#F1F6FB',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        position: 'relative',
    },
});
