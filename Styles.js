import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    display: {
        flex: 2,
        backgroundColor: '#ddd',
        fontSize: 50,
        textAlign: 'right',
        paddingTop: 30,
        paddingRight: 10
    },
    displaySmaller: {
        flex: 1,
        backgroundColor: '#ddd',
        fontSize: 25,
        textAlign: 'right',
        paddingTop: 30,
        paddingRight: 10
    },
    result: {
        flex: 0.4,
        color: '#555555',
        backgroundColor: '#ddd',
        fontSize: 20,
        textAlign: 'right',
        paddingRight: 10,
        paddingBottom: 10
    },
    buttons: {
        flex: 8,
        flexDirection: 'row',
    },
    col1: {
        flex: 3,
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 1,
        paddingRight: 1,
        backgroundColor: '#000000',
    },
    line: {
        flex: 1,
        flexDirection: 'row',
        margin: 2,
        justifyContent: 'space-between'
    },
    btn: {
        flex: 1,
        marginTop: 1,
        marginBottom: 1,
        marginLeft: 3, 
        marginRight: 3,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.05)'
    },
    btnOperations: {
        flex: 1,
        marginTop: 1,
        marginBottom: 1,
        marginRight: 4,
        marginLeft: -1,
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.085)'
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25
    },
    col2: {
        flex: 1,
        backgroundColor: '#000000',
        paddingTop: 2,
        paddingBottom: 2
    },
    footer: {
        flex: 0.5,
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    footerText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 13
    }
})