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
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const EditProfile = ({navigation}) => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [mobile, setMobile] = useState('');
    const [gender, setGender] = useState('');

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
                        Edit Profile
                    </Text>
                    <View />
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{
                            borderColor: '#FF92A4',
                            borderWidth: 1,
                            padding: 7,
                            borderRadius: 40,
                            position: 'relative',
                        }}>
                        <Image
                            source={require('../../../assets/images/user.png')}
                            style={{height: 100, width: 100, borderRadius: 20}}
                        />
                        <View style={styles.position}>
                            <Feather name="camera" color="#fff" size={15} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: 20, paddingHorizontal: 20}}>
                    <Text style={styles.label}>Full Name:</Text>
                    <TextInput
                        value={fullName}
                        onChangeText={text => setFullName(text)}
                        style={styles.input}
                    />
                    <Text style={styles.label}>Email Address:</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                    <Text style={styles.label}>Phone Number:</Text>
                    <TextInput
                        style={styles.input}
                        value={mobile}
                        onChangeText={text => setMobile(text)}
                    />
                    <Text style={styles.label}>Location:</Text>
                    <TextInput
                        style={styles.input}
                        value={location}
                        onChangeText={text => setLocation(text)}
                    />
                    <Text style={styles.label}>Gender:</Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-between',
                        }}>
                        <TouchableOpacity
                            onPress={() => setGender('male')}
                            style={[
                                styles.input,
                                {
                                    width: '48%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                },
                            ]}
                            activeOpacity={0.8}>
                            <View style={styles.click}>
                                {gender === 'male' && (
                                    <AntDesign
                                        name="checkcircle"
                                        color={'#4E51BF'}
                                        size={18}
                                    />
                                )}
                            </View>
                            <Text style={styles.text}>Male</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setGender('female')}
                            style={[
                                styles.input,
                                {
                                    width: '48%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                },
                            ]}
                            activeOpacity={0.8}>
                            <View style={styles.click}>
                                {gender === 'female' && (
                                    <AntDesign
                                        name="checkcircle"
                                        color={'#4E51BF'}
                                        size={18}
                                    />
                                )}
                            </View>
                            <Text style={styles.text}>Female</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                        <Text style={[styles.textBold, {color: '#fff'}]}>
                            Save Changes
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default EditProfile;

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
        borderColor: 'rgba(218, 218, 241, 0.4)',
        height: 45,
        backgroundColor: 'rgba(218, 218, 241, 0.4)',
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
