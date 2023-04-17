import React from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme'
import { TouchableOpacity } from 'react-native';
import { useForm } from '../hook/useForm';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

interface Props extends NativeStackScreenProps<any, any> {}


export const RegisterScreen = ({ navigation }:Props) => {


    const { email, password,name, onChange } = useForm({
        name: '',
        email: '',
        password: ''
    })

    const onRegister = () => {
        console.log({ email, password, name })
        Keyboard.dismiss();
    }

    return (
        <>


            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={ (Platform.OS === 'ios') ? 'padding': 'height' }
            >


                <View style={loginStyles.formContainer}>

                    <WhiteLogo />

                    <Text style={loginStyles.title}>Registro</Text>

                    <Text style={loginStyles.label}>Nombre</Text>
                    <TextInput
                        placeholder='Ingrese su nombre'
                        placeholderTextColor="rgba(0,0,0,0.5)"
                        underlineColorAndroid="black"
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="black"
                        autoCapitalize='words'
                        onChangeText={(value) => onChange(value, 'name')}
                        value={name}
                        onSubmitEditing={onRegister}
                    />

                    <Text style={loginStyles.label}>Email</Text>
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
                        onSubmitEditing={onRegister}
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
                        onSubmitEditing={onRegister}
                    />

                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            style={loginStyles.button}
                            onPress={onRegister}
                        >
                            <Text style={loginStyles.buttonText}>Crear cuenta</Text>
                        </TouchableOpacity>


                    </View>

                    <TouchableOpacity
                        onPress={ ()=> navigation.replace('Login')}
                        style={ loginStyles.buttonReturn }
                    >
                        <Text style={ loginStyles.buttonText } >Login</Text>
                    </TouchableOpacity>

                </View>

            </KeyboardAvoidingView>

        </>
    )
}

