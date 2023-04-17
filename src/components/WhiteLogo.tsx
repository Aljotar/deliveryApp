import React from 'react'
import { Image, View } from 'react-native'

export const WhiteLogo = () => {
  return (
    <View style={{
        alignItems: 'center'
    }}>
        <Image 
            source={ require('../assets/logoPizza.jpg')}
            style={{
                width: 150,
                height: 170,
                marginTop: 30
            }}
        />

    </View>
  )
}
