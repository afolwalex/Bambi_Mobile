import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {quiz} from '../../utils/data';
import Trophy from '../../../assets/images/trophy.svg';

const Quiz = ({navigation}) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [answers, setAnswers] = useState([]);

    const selectAnswer = ans => {
        const itExists = answers.find(
            a => a.questionIndex === currentQuestion && a.answer === ans,
        );
        if (!itExists) {
            const removeDuplicateIndex = answers.find(
                a => a.questionIndex === currentQuestion,
            );
            let arr;
            if (removeDuplicateIndex) {
                arr = answers.filter(a => a.questionIndex !== currentQuestion);
            } else {
                arr = answers;
            }

            let data = {
                questionIndex: currentQuestion,
                answer: ans,
            };
            setAnswers([...arr, data]);
        }
    };

    const selectedStyle = (ans, type) => {
        if (
            answers.find(
                a => a.answer === ans && a.questionIndex === currentQuestion,
            )
        ) {
            return type === 'border' ? 2 : '#FF92A4';
        } else {
            return type === 'border' ? 1 : '#C1C1C1';
        }
    };

    const addBackground = ans => {
        if (
            answers.find(
                a => a.answer === ans && a.questionIndex === currentQuestion,
            )
        ) {
            return '#FF92A4';
        } else {
            return '#FFFFFF';
        }
    };

    const nextHandler = () => {
        if (quiz.length - 1 === currentQuestion) {
            setCompleted(true);
        } else {
            setCurrentQuestion(currentQuestion + 1);
        }
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
                        style={[styles.round, {borderColor: '#D0D0D0'}]}>
                        <FontAwesome
                            name="angle-left"
                            color={'#FFF'}
                            size={25}
                        />
                    </TouchableOpacity>
                    <Text
                        style={[
                            styles.textBold,
                            {fontSize: 17, textTransform: 'capitalize'},
                        ]}>
                        Play quiz
                    </Text>
                    {!completed ? (
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={nextHandler}>
                            <Text style={[styles.text, {fontSize: 15}]}>
                                Skip
                            </Text>
                        </TouchableOpacity>
                    ) : (
                        <View />
                    )}
                </View>
                {!completed ? (
                    <>
                        <View
                            style={{
                                flexDirection: 'row',
                                backgroundColor: '#05518B',
                                padding: 4,
                                borderRadius: 14,
                                alignItems: 'center',
                                marginVertical: 10,
                            }}>
                            <View
                                style={{
                                    width: '50%',
                                    backgroundColor: '#FFE9CE',
                                    paddingVertical: 3,
                                    paddingHorizontal: 5,
                                    borderRadius: 8,
                                }}>
                                <Text>18 sec</Text>
                            </View>
                            <View
                                style={{
                                    width: '50%',
                                    alignItems: 'flex-end',
                                    paddingHorizontal: 5,
                                }}>
                                <AntDesign
                                    name="clockcircleo"
                                    color="#fff"
                                    size={16}
                                />
                            </View>
                        </View>

                        <Text
                            style={[
                                styles.textBold,
                                {
                                    textAlign: 'center',
                                    fontSize: 20,
                                    marginVertical: 20,
                                },
                            ]}>
                            Question 1/{quiz.length}
                        </Text>
                        <View style={{paddingHorizontal: 5}}>
                            <View style={styles.box}>
                                <Text
                                    style={[
                                        styles.textBold,
                                        {
                                            color: '#2E3E5C',
                                            fontSize: 15,
                                            marginBottom: 25,
                                        },
                                    ]}>
                                    {quiz[currentQuestion].question}
                                </Text>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={[
                                        styles.option,
                                        {
                                            borderColor: selectedStyle(
                                                quiz[currentQuestion].optionA,
                                                'color',
                                            ),
                                            borderWidth: selectedStyle(
                                                quiz[currentQuestion].optionA,
                                                'border',
                                            ),
                                        },
                                    ]}
                                    onPress={() =>
                                        selectAnswer(
                                            quiz[currentQuestion].optionA,
                                        )
                                    }>
                                    <View
                                        style={{
                                            width: '80%',
                                            flexDirection: 'row',
                                        }}>
                                        <Text
                                            style={[
                                                styles.text,
                                                {
                                                    marginRight: 5,
                                                    color: '#989898',
                                                },
                                            ]}>
                                            A.
                                        </Text>
                                        <Text
                                            style={[
                                                styles.text,
                                                {color: '#989898'},
                                            ]}>
                                            {quiz[currentQuestion].optionA}
                                        </Text>
                                    </View>
                                    <View
                                        style={[
                                            styles.click,
                                            {
                                                backgroundColor: addBackground(
                                                    quiz[currentQuestion]
                                                        .optionA,
                                                ),
                                            },
                                        ]}>
                                        <Entypo
                                            name="check"
                                            size={15}
                                            color="#fff"
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.option,
                                        {
                                            borderColor: selectedStyle(
                                                quiz[currentQuestion].optionB,
                                                'color',
                                            ),
                                            borderWidth: selectedStyle(
                                                quiz[currentQuestion].optionB,
                                                'border',
                                            ),
                                        },
                                    ]}
                                    activeOpacity={0.8}
                                    onPress={() =>
                                        selectAnswer(
                                            quiz[currentQuestion].optionB,
                                        )
                                    }>
                                    <View
                                        style={{
                                            width: '80%',
                                            flexDirection: 'row',
                                        }}>
                                        <Text
                                            style={[
                                                styles.text,
                                                {
                                                    marginRight: 5,
                                                    color: '#989898',
                                                },
                                            ]}>
                                            B.
                                        </Text>
                                        <Text
                                            style={[
                                                styles.text,
                                                {color: '#989898'},
                                            ]}>
                                            {quiz[currentQuestion].optionB}
                                        </Text>
                                    </View>
                                    <View
                                        style={[
                                            styles.click,
                                            {
                                                backgroundColor: addBackground(
                                                    quiz[currentQuestion]
                                                        .optionB,
                                                ),
                                            },
                                        ]}>
                                        <Entypo
                                            name="check"
                                            size={15}
                                            color="#fff"
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.option,
                                        {
                                            borderColor: selectedStyle(
                                                quiz[currentQuestion].optionC,
                                                'color',
                                            ),
                                            borderWidth: selectedStyle(
                                                quiz[currentQuestion].optionC,
                                                'border',
                                            ),
                                        },
                                    ]}
                                    activeOpacity={0.8}
                                    onPress={() =>
                                        selectAnswer(
                                            quiz[currentQuestion].optionC,
                                        )
                                    }>
                                    <View
                                        style={{
                                            width: '80%',
                                            flexDirection: 'row',
                                        }}>
                                        <Text
                                            style={[
                                                styles.text,
                                                {
                                                    marginRight: 5,
                                                    color: '#989898',
                                                },
                                            ]}>
                                            C.
                                        </Text>
                                        <Text
                                            style={[
                                                styles.text,
                                                {color: '#989898'},
                                            ]}>
                                            {quiz[currentQuestion].optionC}
                                        </Text>
                                    </View>
                                    <View
                                        style={[
                                            styles.click,
                                            {
                                                backgroundColor: addBackground(
                                                    quiz[currentQuestion]
                                                        .optionC,
                                                ),
                                            },
                                        ]}>
                                        <Entypo
                                            name="check"
                                            size={15}
                                            color="#fff"
                                        />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.option,
                                        {
                                            borderColor: selectedStyle(
                                                quiz[currentQuestion].optionD,
                                                'color',
                                            ),
                                            borderWidth: selectedStyle(
                                                quiz[currentQuestion].optionD,
                                                'border',
                                            ),
                                        },
                                    ]}
                                    activeOpacity={0.8}
                                    onPress={() =>
                                        selectAnswer(
                                            quiz[currentQuestion].optionD,
                                        )
                                    }>
                                    <View
                                        style={{
                                            width: '80%',
                                            flexDirection: 'row',
                                        }}>
                                        <Text
                                            style={[
                                                styles.text,
                                                {
                                                    marginRight: 5,
                                                    color: '#989898',
                                                },
                                            ]}>
                                            D.
                                        </Text>
                                        <Text
                                            style={[
                                                styles.text,
                                                {color: '#989898'},
                                            ]}>
                                            {quiz[currentQuestion].optionD}
                                        </Text>
                                    </View>
                                    <View
                                        style={[
                                            styles.click,
                                            {
                                                backgroundColor: addBackground(
                                                    quiz[currentQuestion]
                                                        .optionD,
                                                ),
                                            },
                                        ]}>
                                        <Entypo
                                            name="check"
                                            size={15}
                                            color="#fff"
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={nextHandler}
                                activeOpacity={0.8}>
                                <Text
                                    style={[
                                        styles.textBold,
                                        {color: '#2E3E5C'},
                                    ]}>
                                    Next Question
                                </Text>
                                <Feather
                                    name="arrow-right"
                                    size={22}
                                    color={'#2E3E5C'}
                                    style={styles.set2}
                                />
                            </TouchableOpacity>
                        </View>
                    </>
                ) : (
                    <View style={{alignItems: 'center', marginTop: 20}}>
                        <Text
                            style={[
                                styles.textBold,
                                {fontSize: 25, fontStyle: 'italic'},
                            ]}>
                            Great Job!!!
                        </Text>
                        <View
                            style={{
                                marginVertical: 40,
                                height: 140,
                                width: 140,
                                backgroundColor: '#fff',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 70,
                            }}>
                            <Trophy />
                        </View>
                        <View style={{marginBottom: 40}}>
                            <Text style={[styles.text]}>
                                You should NEVER give out your name or address
                                to anyone you meet online. If you really want to
                                have an "offline" conversation with this person,
                                check with your parents to see if they can think
                                of a safe way to arrange it.
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={[styles.btn, {width: '100%'}]}
                            onPress={() => navigation.navigate('Home')}
                            activeOpacity={0.8}>
                            <Text style={[styles.textBold, {color: '#2E3E5C'}]}>
                                Completed
                            </Text>
                            <Feather
                                name="arrow-right"
                                size={22}
                                color={'#2E3E5C'}
                                style={styles.set2}
                            />
                        </TouchableOpacity>
                    </View>
                )}
            </ScrollView>
        </View>
    );
};

export default Quiz;

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
    box: {
        minHeight: 350,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 15,
    },
    option: {
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#C1C1C1',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
    },
    click: {
        height: 25,
        width: 25,
        borderColor: '#C1C1C1',
        borderWidth: 1,
        borderRadius: 25 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        backgroundColor: '#F1F6FB',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        position: 'relative',
        marginTop: 30,
    },
    set2: {
        position: 'absolute',
        right: 10,
        top: 16,
    },
});
