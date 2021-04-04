import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        position: 'absolute',
        left: 8,
        bottom: 8
    },
    buttonData: {
        position: 'absolute',
        right: 8,
        bottom: 8
    },
    button: {
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        height: 38,
        width: 55,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 50
    },
    row: {
        flexDirection: 'row'
    },
    time: {
        fontSize: 58,
        color: 'white'
    },
    ampm: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },
    icon: {
        width: 350,
        height: 350
    },
    city: {
        fontSize: 25,
        color: 'white'
    },
    temp: {
        fontSize: 32,
        color: 'white'
    },
    locationInput: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        margin: 8,
        padding: 10,
        borderWidth: 1,
        borderColor: 'white'
    },
    unitButton: {
        fontSize: 20,
        color: '#778899'
    },
    alarmStyle: {
        justifyContent: 'center', //Centered vertically
        alignItems: 'center', // Centered horizontally
        height: 50,
        width: 140,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 50
    },
});