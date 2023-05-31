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
import EmailIcon from '../../../assets/images/key.svg';
import {useDispatch} from 'react-redux';
import mainStyles from '../../utils/mainStyles';

const ChangePassword = ({navigation}) => {
    const dispatch = useDispatch();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showCPassword, setShowCPassword] = useState(false);

    const submitHandler = () => {
        navigation.navigate('Login');
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
                    <View style={{marginTop: '40%', paddingHorizontal: '4%'}}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 50,
                            }}>
                            <Text
                                style={[
                                    mainStyles.textBold,
                                    {fontSize: 22, color: '#FFFEFE'},
                                ]}>
                                Reset Password
                            </Text>
                            <Text
                                style={[
                                    mainStyles.text,
                                    {
                                        color: '#FFFEFE',
                                        marginTop: 20,
                                        fontSize: 13,
                                        textAlign: 'center',
                                    },
                                ]}>
                                Enter your new password. It must be different
                                from your previous password
                            </Text>
                        </View>

                        <View style={styles.inputField}>
                            <TextInput
                                style={mainStyles.loginInput}
                                value={password}
                                onChangeText={text => setPassword(text)}
                                secureTextEntry={showPassword ? false : true}
                                placeholder="Enter New Password"
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
                                style={mainStyles.loginInput}
                                value={confirmPassword}
                                onChangeText={text => setConfirmPassword(text)}
                                secureTextEntry={showCPassword ? false : true}
                                placeholder="Confirm New Password"
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
                            <View style={{marginTop: 20, marginBottom: 20}}>
                                <TouchableOpacity
                                    style={mainStyles.loginBtn}
                                    onPress={submitHandler}
                                    activeOpacity={0.8}>
                                    <Text
                                        style={[
                                            mainStyles.textBold,
                                            {color: '#2E3E5C'},
                                        ]}>
                                        Reset Password
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

export default ChangePassword;

const styles = StyleSheet.create({
    inputField: {
        marginBottom: 25,
        position: 'relative',
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
});
