import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Points = ({navigation}) => {
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
                </View>
                <View style={{alignItems: 'center', marginBottom: 20}}>
                    <Text style={[styles.textBold]}>Your Points</Text>
                    <View
                        style={{
                            borderWidth: 1,
                            borderColor: '#4E51BF',
                            padding: 7,
                            borderRadius: 10,
                            marginTop: 10,
                            backgroundColor: '#EEF3F7',
                        }}>
                        <Text style={[styles.textBold]}>🌟: 500P</Text>
                    </View>
                </View>
                <Text style={[styles.text, {fontSize: 13}]}>
                    You have 500 points. Points enable you to unlock more
                    courses and qualify for giveaways. Keep learning every day
                    to get more!
                </Text>
                <View
                    style={{
                        borderColor: '#4E51BF',
                        borderWidth: 1,
                        width: '100%',
                        marginVertical: 20,
                    }}
                />
                <Text style={[styles.textBold, {fontSize: 18}]}>
                    How to earn points
                </Text>
            </ScrollView>
        </View>
    );
};

export default Points;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    text: {
        fontFamily: 'Inter-Regular',
        color: '#2E3E5C',
    },
    textBold: {
        fontFamily: 'Inter-Bold',
        color: '#2E3E5C',
    },
    round: {
        borderColor: '#4E51BF',
        borderWidth: 1,
        marginLeft: 10,
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderRadius: 8,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
});
