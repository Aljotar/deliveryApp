import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    formContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 600,
        marginTop: 70
    },
    title: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20
    },
    label: {
        marginTop: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    inputField: {
        color: 'white',
        fontSize: 20,
        paddingBottom: 8
    },
    inputFieldIOS: {
        borderBottomColor: 'white',
        borderBottomWidth: 2
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    buttonText: {
        fontSize: 18,
        color: 'white'
    },
    buttonContainerRegister: {
        alignItems: 'center',
        marginTop: 80
    },

    buttonRegister: {
        borderColor: 'black',
        borderWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    buttonTextRegister: {
        fontSize: 18,
        color: 'black'
    } 
});