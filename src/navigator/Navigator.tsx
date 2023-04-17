import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext } from 'react'
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { AuthContext } from '../context/AuthContext';
import { ProtectedScreen } from '../screens/ProtectedScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {

    const { status } = useContext(AuthContext);

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
                        <Stack.Screen name="Protected" component={ProtectedScreen} />
                    )
            }
        </Stack.Navigator>
    );
}
