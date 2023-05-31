import {StyleSheet} from 'react-native';

const mainStyles = StyleSheet.create({
    loginInput: {
        width: '100%',
        borderColor: '#F1F6FB',
        borderWidth: 1,
        height: 50,
        borderRadius: 8,
        paddingLeft: 40,
        color: 'rgba(241, 246, 251, 0.8)',
        fontFamily: 'Inter-Regular',
    },
    text: {
        fontFamily: 'Inter-Regular',
        color: 'rgba(241, 246, 251, 0.8)',
    },
    textBold: {
        fontFamily: 'Inter-Bold',
        color: 'rgba(241, 246, 251, 0.8)',
    },
    line: {
        height: 1,
        width: 50,
        backgroundColor: '#F1F6FB',
        marginHorizontal: 10,
    },
    loginBtn: {
        backgroundColor: '#F1F6FB',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
        position: 'relative',
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
    txt: {
        fontFamily: 'Inter-Regular',
        color: '#2E3E5C',
    },
    txtBold: {
        fontFamily: 'Inter-Bold',
        color: '#2E3E5C',
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

export default mainStyles;
