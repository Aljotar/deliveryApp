import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductsStackParams } from '../navigator/ProductsNavigator'

interface Props extends NativeStackScreenProps<ProductsStackParams, 'ProductsScreen'>{};

export const ProductScreen = ({ navigation, route }: Props) => {

    const { id, name= ''} = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: ( name ) ? name : 'Nuevo Producto'
        })
    }, [])
    

    return (
        <View>
            <Text>
                <Text>{id} { name} </Text>
            </Text>
        </View>
    )
}