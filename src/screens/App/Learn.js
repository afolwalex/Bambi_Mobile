import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Filter from '../../../assets/images/filter.svg';
import {categories, courses} from '../../utils/data';
import CourseB from '../../components/CourseB';
import CourseS from '../../components/CourseS';

const Learn = ({navigation}) => {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    return (
        <View style={styles.container}>
            <ScrollView
                contentContainerStyle={{paddingBottom: 70}}
                showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View />
                    <Text
                        style={[
                            styles.textBold,
                            {fontSize: 17, textTransform: 'capitalize'},
                        ]}>
                        Discover Courses
                    </Text>
                    <View style={{flexDirection: 'row'}}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.navigate('Notifications')}
                            style={[
                                styles.round,
                                {borderColor: 'rgba(0, 0, 0, 0.5)'},
                            ]}>
                            <Feather name="bell" color={'#2E3E5C'} size={22} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <View style={{width: '80%', position: 'relative'}}>
                        <TextInput
                            style={styles.input}
                            value={search}
                            onChangeText={text => setSearch(text)}
                            placeholder="Search Course"
                            placeholderTextColor={'#8189B0'}
                        />
                        <View style={{position: 'absolute', top: 15, left: 10}}>
                            <Feather
                                name="search"
                                color={'#8189B0'}
                                size={20}
                            />
                        </View>
                    </View>
                    <View style={{width: '20%', alignItems: 'flex-end'}}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <Filter height={45} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.head}>
                    <Text style={[styles.textBold]}>Featured Courses</Text>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginVertical: 5,
                        }}>
                        {courses.map(c => (
                            <View key={c.id}>
                                <CourseB course={c} navigation={navigation} />
                            </View>
                        ))}
                    </View>
                </ScrollView>
                <View style={styles.head}>
                    <Text style={[styles.textBold]}>Categories</Text>
                    <TouchableOpacity>
                        <Text style={[styles.textBold, {color: '#FF92A4'}]}>
                            View all
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                    <View
                        style={{
                            flexDirection: 'row',
                            marginVertical: 5,
                        }}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => setActiveCategory('all')}
                            style={[
                                styles.link,
                                {
                                    backgroundColor:
                                        activeCategory === 'all'
                                            ? '#4E51BF'
                                            : '#F1F6FB',
                                },
                            ]}>
                            <Text
                                style={[
                                    styles.text,
                                    {
                                        color:
                                            activeCategory === 'all'
                                                ? '#fff'
                                                : '#2E3E5C',
                                    },
                                ]}>
                                All
                            </Text>
                        </TouchableOpacity>
                        {categories.map(c => (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => setActiveCategory(c.name)}
                                key={c.id}
                                style={[
                                    styles.link,
                                    {
                                        backgroundColor:
                                            activeCategory === c.name
                                                ? '#4E51BF'
                                                : '#F1F6FB',
                                    },
                                ]}>
                                <Text
                                    style={[
                                        styles.text,
                                        {
                                            color:
                                                activeCategory === c.name
                                                    ? '#fff'
                                                    : '#2E3E5C',
                                        },
                                    ]}>
                                    {c.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
                <View
                    style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        marginBottom: 20,
                    }}>
                    {courses.map(c => (
                        <CourseS
                            course={c}
                            key={c.id}
                            navigation={navigation}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default Learn;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 10,
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
        paddingHorizontal: 5,
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
    input: {
        width: '100%',
        backgroundColor: '#F1F6FB',
        height: 45,
        color: 'rgba(0, 0, 0, 0.5)',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        borderWidth: 1,
        paddingLeft: 40,
        fontFamily: 'Inter-Regular',
        borderRadius: 10,
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 10,
    },
    link: {
        paddingHorizontal: 20,
        marginRight: 8,
        paddingVertical: 8,
        borderRadius: 10,
    },
});
