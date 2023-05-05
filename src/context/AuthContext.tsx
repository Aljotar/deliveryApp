import React, { Children, createContext, useReducer, useEffect } from "react";
import { LoginData, LoginResponse, RegisterData, Usuario } from "../interfaces/appInterfaces";
import { AuthState, authReducer } from "./authReducer";
import deliveryApi from "../api/deliveryApi";
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: (registerData: RegisterData) => void;
    signIn: (loginData: LoginData) => void;
    logOut: () => void;
    removeError: () => void;
}

const authInicialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}



export const AuthContext = createContext({} as AuthContextProps);


export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInicialState);


    useEffect(() => {

        checkToken();

    }, [])



    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');

        //No token, no autenticacion

        if (!token) return dispatch({ type: 'notAuthenticated' })


        //Hay token

        const resp = await deliveryApi.get('/auth');

        if (resp.status !== 200) {
            return dispatch({ type: 'notAuthenticated' })
        }

        await AsyncStorage.setItem('token', resp.data.token);

        dispatch({
            type: 'signUp',
            payload: {
                token: resp.data.token,
                user: resp.data.usuario
            }
        })


    }

    const signIn = async ({ correo, password }: LoginData) => {

        try {

            const { data } = await deliveryApi.post<LoginResponse>('/auth/login', { correo, password });

            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            })

            await AsyncStorage.setItem('token', data.token);

        } catch (error: any) {
            console.log(error.response.data.msg)
            dispatch({
                type: 'addError',
                payload: error.response.data.msg || 'Información incorrecta'
            })
        }



    };


    const signUp = async ({ nombre, password, correo }: RegisterData) => {

        try {

            const { data } = await deliveryApi.post<LoginResponse>('/usuarios', { correo, password, nombre });

            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            })

            await AsyncStorage.setItem('token', data.token);

        } catch (error: any) {
            console.log(error.response.data)
            dispatch({
                type: 'addError',
                payload: error.response.data.errors[0].msg || 'Revise la información'
            })
        }

    };


    const logOut = async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logout' })
    };


    const removeError = () => {
        dispatch({ type: 'removeError' });
    };

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError
        }} >
            {children}
        </AuthContext.Provider>
    )
}