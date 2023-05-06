import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductsStackParams } from '../navigator/ProductsNavigator'

import { Picker } from '@react-native-picker/picker';
import { useCategories } from '../hook/useCategories';

interface Props extends NativeStackScreenProps<ProductsStackParams, 'ProductsScreen'> { };

export const ProductScreen = ({ navigation, route }: Props) => {

    const [selectedLanguage, setSelectedLanguage] = useState();

    const { categories } = useCategories();

    const { id, name = '' } = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: (name) ? name : 'Nuevo Producto'
        })
    }, [])


    return (
        <View style={styles.container}>

            <ScrollView>
                <Text style={styles.label}>Nombre del producto</Text>
                <TextInput
                    placeholder='Producto'
                    style={styles.textInput}
                />
                <Text style={styles.label}>Categoria</Text>

                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                        {
                            categories.map(c =>(
                                <Picker.Item label={c.nombre} value={c._id} key={c._id}/>
                            ))
                        }
                    
                </Picker>

                <Button
                    title='Guardar'
                    onPress={() => { }}
                    color="#5856D6"

                />

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>

                    <Button
                        title='Cámara'
                        onPress={() => { }}
                        color="#5856D6"

                    />
                    <View style={{ width: 10 }} />
                    <Button
                        title='Galería'
                        onPress={() => { }}
                        color="#5856D6"

                    />

                </View>






            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 20
    },
    label: {
        fontSize: 18
    },
    textInput: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderColor: 'rgba(0,0,0,0.2)',
        height: 45,
        marginTop: 5,
        marginBottom: 15
    }
})