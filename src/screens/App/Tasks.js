import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {tasks} from '../../utils/data';

const Tasks = ({navigation}) => {
    const [tab, setTab] = useState('Assigned');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.goBack(null)}
                    style={[styles.round, {borderColor: '#D0D0D0'}]}>
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
                    {tab} Tasks
                </Text>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[styles.round, {borderColor: '#D0D0D0'}]}>
                    <Feather name="search" color={'#2E3E5C'} size={23} />
                </TouchableOpacity>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: '#4E51BF',
                    padding: 4,
                    borderRadius: 15,
                }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                        styles.tab,
                        {
                            backgroundColor:
                                tab === 'Assigned' ? '#FF92A4' : '#4E51BF',
                        },
                    ]}
                    onPress={() => setTab('Assigned')}>
                    <Text style={[styles.textBold, {color: '#fff'}]}>
                        Assigned tasks
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[
                        styles.tab,
                        {
                            backgroundColor:
                                tab === 'Personal' ? '#FF92A4' : '#4E51BF',
                        },
                    ]}
                    onPress={() => setTab('Personal')}>
                    <Text style={[styles.textBold, {color: '#fff'}]}>
                        Personal tasks
                    </Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                contentContainerStyle={{paddingBottom: 70}}
                showsVerticalScrollIndicator={false}>
                <View style={{marginTop: 20}}>
                    {tasks.map(t => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ViewTask')}
                            key={t.id}
                            activeOpacity={0.8}
                            style={[
                                styles.task,
                                {
                                    borderColor:
                                        t.status === 'completed'
                                            ? '#4E51BF'
                                            : '#FF92A4',
                                },
                            ]}>
                            <View style={{alignItems: 'flex-end'}}>
                                <View
                                    style={{
                                        backgroundColor:
                                            t.status === 'completed'
                                                ? '#4E51BF'
                                                : '#FF92A4',
                                        paddingVertical: 8,
                                        width: 100,
                                        alignItems: 'center',
                                        borderBottomLeftRadius: 30,
                                        borderTopRightRadius: 20,
                                    }}>
                                    <Text
                                        style={[
                                            styles.text,
                                            {color: '#fff', fontSize: 12},
                                        ]}>
                                        {t.status}
                                    </Text>
                                </View>
                            </View>
                            <View
                                style={{
                                    paddingVertical: 10,
                                    paddingHorizontal: 20,
                                }}>
                                <Text style={[styles.textBold, {fontSize: 15}]}>
                                    {t.title}
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        marginTop: 5,
                                        alignItems: 'center',
                                    }}>
                                    <Text style={[styles.text, {fontSize: 12}]}>
                                        Deadline: {t.deadline}
                                    </Text>
                                    <View style={styles.icon}>
                                        {t.status === 'completed' && (
                                            <Feather
                                                name="check"
                                                color={'#4E51BF'}
                                                size={20}
                                            />
                                        )}
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            {tab === 'Personal' && (
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.floatBtn}
                    onPress={() => navigation.navigate('CreateTask')}>
                    <Feather name="plus" color="#fff" size={24} />
                </TouchableOpacity>
            )}
        </View>
    );
};

export default Tasks;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFE9CE',
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 10,
        position: 'relative',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingTop: 10,
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
    tab: {
        width: '50%',
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    task: {
        marginBottom: 15,
        borderWidth: 2,
        backgroundColor: '#fff',
        borderRadius: 25,
    },
    icon: {
        borderWidth: 1,
        borderColor: '#FF92A4',
        height: 20,
        width: 20,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    floatBtn: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#4E51BF',
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
