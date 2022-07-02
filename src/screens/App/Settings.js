import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {signOutUser} from '../../redux/services/auth';

const Settings = ({navigation}) => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(signOutUser());
    };

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{paddingBottom: 70}}
                showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
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
                    <Text
                        style={[
                            styles.textBold,
                            {fontSize: 17, textTransform: 'capitalize'},
                        ]}>
                        Settings
                    </Text>
                    <View />
                </View>
                <View style={{paddingHorizontal: 30, marginTop: 30}}>
                    <TouchableOpacity
                        style={styles.btn}
                        activeOpacity={0.8}
                        onPress={logoutHandler}>
                        <Feather name="log-out" size={20} color="#fff" />
                        <Text
                            style={[
                                styles.textBold,
                                {color: '#fff', marginLeft: 20},
                            ]}>
                            Log Out
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default Settings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#FFF',
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
    btn: {
        backgroundColor: '#FF92A4',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
});
