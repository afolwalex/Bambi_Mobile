import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    Alert,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import KeyIcon from '../../../assets/images/email.svg';
import EmailIcon from '../../../assets/images/key.svg';
import UserIcon from '../../../assets/images/user.svg';
import Logo from '../../../assets/images/logo-white.svg';
import {useDispatch} from 'react-redux';

const SignUp = ({navigation}) => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);

    const socialHandler = () => {
        Alert.alert('', 'Social Login will be available soon.');
    };

    const submitHandler = () => {};

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
                    <View style={{marginTop: '40%', paddingHorizontal: '4%'}}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 50,
                            }}>
                            <Logo />
                        </View>
                        <View style={styles.inputField}>
                            <TextInput
                                style={styles.input}
                                value={name}
                                onChangeText={text => setName(text)}
                                placeholder="Full Name"
                                placeholderTextColor={'#D0D0D0'}
                            />
                            <View style={[styles.set1, {top: 15}]}>
                                <UserIcon />
                            </View>
                        </View>
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
                        <View style={styles.inputField}>
                            <TextInput
                                style={styles.input}
                                value={password}
                                onChangeText={text => setPassword(text)}
                                secureTextEntry={showPassword ? false : true}
                                placeholder="Password"
                                placeholderTextColor={'#D0D0D0'}
                            />
                            <View style={styles.set1}>
                                <EmailIcon />
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => setShowPassword(!showPassword)}
                                style={styles.set2}>
                                <Feather
                                    name={showPassword ? 'eye-off' : 'eye'}
                                    color={'#fff'}
                                    size={18}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.inputField}>
                            <TextInput
                                style={styles.input}
                                value={confirmPassword}
                                onChangeText={text => setConfirmPassword(text)}
                                secureTextEntry={showCPassword ? false : true}
                                placeholder="Confirm Password"
                                placeholderTextColor={'#D0D0D0'}
                            />
                            <View style={styles.set1}>
                                <EmailIcon />
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => setShowCPassword(!showCPassword)}
                                style={styles.set2}>
                                <Feather
                                    name={showCPassword ? 'eye-off' : 'eye'}
                                    color={'#fff'}
                                    size={18}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{marginTop: 20}}>
                            <View
                                style={{
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginBottom: 20,
                                }}>
                                <View style={styles.line} />
                                <Text style={styles.textBold}>
                                    Or use your social account
                                </Text>
                                <View style={styles.line} />
                            </View>
                            <View
                                style={{
                                    alignItems: 'center',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginBottom: 20,
                                }}>
                                <TouchableOpacity
                                    style={styles.round}
                                    activeOpacity={0.8}
                                    onPress={() => socialHandler('facebook')}>
                                    <EvilIcons
                                        name="sc-facebook"
                                        size={24}
                                        color="#4E51BF"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => socialHandler('google')}
                                    style={styles.round}>
                                    <Entypo
                                        name="google-"
                                        size={20}
                                        color="#4E51BF"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.round}
                                    activeOpacity={0.8}
                                    onPress={() => socialHandler('twitter')}>
                                    <Entypo
                                        name="twitter"
                                        size={20}
                                        color="#4E51BF"
                                    />
                                </TouchableOpacity>
                            </View>
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
                                    Have an account?
                                </Text>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => navigation.navigate('Login')}
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
                                        Sign Up
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

export default SignUp;

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
