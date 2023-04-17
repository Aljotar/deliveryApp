import React, { useContext, useEffect } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, View, Alert } from 'react-native'
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme'
import { TouchableOpacity } from 'react-native';
import { useForm } from '../hook/useForm';
import { ScreenStackProps } from 'react-native-screens'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AuthContext } from '../context/AuthContext'


interface Props extends NativeStackScreenProps<any, any> {}

export const LoginScreen = ({ navigation }: Props ) => {

    const { signIn, errorMessage, removeError } = useContext(AuthContext);

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    })


    useEffect(() => {
      if( errorMessage.length === 0 ) return;
    
      Alert.alert('Login incorrecto',
      errorMessage,
      [
        {
            text: 'OK',
            onPress: removeError
        }
      ]
      )

    }, [errorMessage])
    

    const onLogin = () => {
        console.log({ email, password })
        Keyboard.dismiss();
        signIn({ correo: email, password });

    }

    return (
        <>

            <Background />


            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={ (Platform.OS === 'ios') ? 'padding': 'height' }
            >


                <View style={loginStyles.formContainer}>

                    <WhiteLogo />

                    <Text style={loginStyles.title} >Login</Text>

                    <Text style={loginStyles.label} >Email</Text>
                    <TextInput
                        placeholder='Ingrese su email'
                        placeholderTextColor="rgba(0,0,0,0.5)"
                        keyboardType='email-address'
                        underlineColorAndroid="black"
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="black"
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(value) => onChange(value, 'email')}
                        value={email}
                        onSubmitEditing={onLogin}
                    />


                    <Text style={loginStyles.label} >Contraseña</Text>
                    <TextInput
                        placeholder='***********'
                        placeholderTextColor="rgba(0,0,0,0.5)"
                        underlineColorAndroid="black"
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"
                        secureTextEntry
                        onChangeText={(value) => onChange(value, 'password')}
                        value={password}
                        onSubmitEditing={onLogin}
                    />

                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            style={loginStyles.button}
                            onPress={onLogin}
                        >
                            <Text style={loginStyles.buttonText}>Login</Text>
                        </TouchableOpacity>


                    </View>

                    <View style={loginStyles.buttonContainerRegister}>
                        <TouchableOpacity
                            style={loginStyles.buttonRegister}
                            onPress={ ()=> navigation.navigate('Register') }
                        >
                            <Text style={loginStyles.buttonTextRegister}>Crear cuenta</Text>
                        </TouchableOpacity>


                    </View>

                </View>

            </KeyboardAvoidingView>

        </>
    )
}
