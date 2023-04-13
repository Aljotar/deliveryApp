import React from 'react'
import { KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native'
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useForm } from '../hook/useForm'

export const LoginScreen = () => {

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    })

    const onLogin = () => {
        console.log({email, password})
    }

    return (
        <>

            <Background />


                <View style={loginStyles.formContainer}>

                    <WhiteLogo />

                    <Text style={loginStyles.title} >Login</Text>

                    <Text style={loginStyles.label} >Emil</Text>
                    <TextInput
                        placeholder='Ingrese su email:'
                        placeholderTextColor="rgba(255,255,255,0.5)"
                        keyboardType='email-address'
                        underlineColorAndroid="white"
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'email')}
                        value={email}
                        onSubmitEditing={ onLogin }
                    />


                    <Text style={loginStyles.label} >Contraseña</Text>
                    <TextInput
                        placeholder='***********'
                        placeholderTextColor="rgba(255,255,255,0.5)"
                        underlineColorAndroid="white"
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"
                        secureTextEntry
                        onChangeText={(value) => onChange(value, 'password')}
                        value={password}
                        onSubmitEditing={ onLogin }
                    />

                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            style={loginStyles.button}
                            onPress={ onLogin }
                        >
                            <Text style={loginStyles.buttonText}>Login</Text>
                        </TouchableOpacity>


                    </View>

                    <View style={loginStyles.buttonContainerRegister}>
                        <TouchableOpacity
                            style={loginStyles.buttonRegister}
                        >
                            <Text style={loginStyles.buttonTextRegister}>Crear cuenta</Text>
                        </TouchableOpacity>


                    </View>

                </View>

     
        </>
    )
}
