import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MailIcon from '../../../assets/images/email.svg';
import {notifications} from '../../utils/data';

const Notifications = ({navigation}) => {
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
                        Notifications
                    </Text>
                    <View />
                </View>
                <View>
                    {notifications.map(n => (
                        <View
                            style={[
                                styles.list,
                                {backgroundColor: n.read ? '#fff' : '#F5F5F5'},
                            ]}
                            key={n.id}>
                            <View style={styles.mail}>
                                <MailIcon />
                            </View>
                            <View>
                                <Text
                                    style={[
                                        styles.textBold,
                                        {fontSize: 15, marginBottom: 5},
                                    ]}>
                                    {n.title}
                                </Text>
                                <Text style={[styles.text, {marginBottom: 20}]}>
                                    {n.message}
                                </Text>
                                <Text style={[styles.text, {fontSize: 13}]}>
                                    {n.date}
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default Notifications;

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
    list: {
        flexDirection: 'row',
        paddingVertical: 20,
        paddingHorizontal: 12,
    },
    mail: {
        backgroundColor: '#4E51BF',
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
});
