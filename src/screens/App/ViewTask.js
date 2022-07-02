import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ViewTask = ({navigation}) => {
    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{paddingBottom: 70}}
                showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.goBack(null)}
                        style={[styles.round, {borderColor: '#D0D0D0'}]}>
                        <FontAwesome
                            name="angle-left"
                            color={'#FFF'}
                            size={25}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        marginTop: 20,
                        padding: 20,
                        backgroundColor: '#fff',
                        borderRadius: 15,
                    }}>
                    <Text
                        style={[
                            styles.text,
                            {color: '#425270', marginBottom: 30},
                        ]}>
                        Task title here and there in this place. Lorem ipsum
                        ipmsum ipsum pTask title here and there in this place.
                        Lorem ipsum ipmsum ipsum pTask title here and there in
                        this place. Lorem ipsum ipmsum ipsum p
                    </Text>
                    <Text style={styles.label}>Task Deadline:</Text>
                    <View
                        style={[
                            styles.input,
                            {flexDirection: 'row', alignItems: 'center'},
                        ]}
                        activeOpacity={0.8}>
                        <FontAwesome
                            name="calendar"
                            size={18}
                            color="#425270"
                        />
                        <Text
                            style={[
                                styles.text,
                                {marginLeft: 10, color: '#425270'},
                            ]}>
                            23 June, 2023
                        </Text>
                    </View>
                </View>
                <View style={{marginTop: 100}}>
                    <TouchableOpacity activeOpacity={0.8} style={styles.btn}>
                        <Text style={[styles.textBold, {color: '#fff'}]}>
                            Mark as Completed
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default ViewTask;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4E51BF',
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingTop: 20,
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
        color: '#fff',
    },
    textBold: {
        fontFamily: 'Inter-Bold',
        color: '#fff',
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
    btn: {
        backgroundColor: '#FF92A4',
        marginTop: 20,
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
    },
});
