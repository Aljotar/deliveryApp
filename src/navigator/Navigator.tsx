import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext } from 'react'
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { AuthContext } from '../context/AuthContext';
import { ProtectedScreen } from '../screens/ProtectedScreen';
import { LoadingScreen } from '../screens/LoadingScreen';
import { ProductsNavigator } from './ProductsNavigator';

const Stack = createNativeStackNavigator();

export const Navigator = () => {

    const { status } = useContext(AuthContext);

    if ( status === 'checking' ) return <LoadingScreen />

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            {
                (status !== 'authenticated')
                    ? (
                        <>
                            <Stack.Screen name="Login" component={LoginScreen} />
                            <Stack.Screen
                                options={{
                                    contentStyle: { backgroundColor: 'white' }
                                }}
                                name="Register" component={RegisterScreen} />
                        </>
                    )
                    : (
                        <>
                        <Stack.Screen name="ProductsNavigator" component={ProductsNavigator} />
                        <Stack.Screen name="Protected" component={ProtectedScreen} />
                        </>
                    )
            }
        </Stack.Navigator>
    );
}
