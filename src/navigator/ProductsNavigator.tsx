import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { ProductsScreen } from '../screens/ProductsScreen';
import { ProductScreen } from '../screens/ProductScreen';

export type ProductsStackParams = {
    ProductsScreen: undefined,
    ProductScreen: { id?: string, name?: string }
}

const Stack = createNativeStackNavigator<ProductsStackParams>();

export const ProductsNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                contentStyle: {
                    backgroundColor: 'white'
                },
                headerShadowVisible: false,
                headerTitleAlign: 'center'
            }}
        >
            <Stack.Screen
                name='ProductsScreen'
                component={ProductsScreen}
                options={{ title: 'Productos' }}
            />
            <Stack.Screen
                name='ProductScreen'
                component={ProductScreen}
            />

        </Stack.Navigator>
    )
}
