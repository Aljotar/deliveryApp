import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    formContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 600,
        marginTop: 50
    },
    title: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20
    },
    label: {
        marginTop: 25,
        color: 'black',
        fontWeight: 'bold'
    },
    inputField: {
        color: 'black',
        fontSize: 20,
        paddingBottom: 8
    },
    inputFieldIOS: {
        borderBottomColor: 'black',
        borderBottomWidth: 2
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        borderWidth: 2,
        borderColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    buttonText: {
        fontSize: 18,
        color: 'black'
    },
    buttonContainerRegister: {
        alignItems: 'center',
        marginTop: 50
    },

    buttonRegister: {
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        paddingVertical: 5
    },
    buttonTextRegister: {
        fontSize: 18,
        color: 'black'
    },
    buttonReturn: {
        position: 'absolute',
        top: 20,
        left: 20,
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 100
    }  
});