import React, { useContext, useEffect } from 'react'
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { ProductsContext } from '../context/ProductsContext'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductsStackParams } from '../navigator/ProductsNavigator';

interface Props extends NativeStackScreenProps<ProductsStackParams, 'ProductsScreen'>{};

export const ProductsScreen = ({ navigation }: Props) => {

    const { products } = useContext(ProductsContext);

    useEffect(() => {
      navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity
                onPress={ () => navigation.navigate('ProductScreen', {}) }
            >
                <Text>Agregar</Text>
            </TouchableOpacity>
        )
      })
    }, [])
    

    return (
        <View style={{ flex: 1, marginHorizontal: 10 }}>

            <FlatList
                data={products}
                keyExtractor={(p) => p._id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={ () => navigation.navigate('ProductScreen', {
                            id: item._id,
                            name: item.nombre
                        })}
                    >
                        <Text style={styles.productName}> {item.nombre} </Text>
                    </TouchableOpacity>
                )}

                ItemSeparatorComponent={() => (
                    <View style={styles.itemSeparator} />
                )}
            />


        </View>
    )
}

const styles = StyleSheet.create({
    productName: {
        fontSize: 20
    },
    itemSeparator: {
        borderBottomWidth: 2,
        marginVertical: 5,
        borderBottomColor: 'rgba(0,0,0,0.1)'
    }
})
