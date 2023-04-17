import React from 'react'
import { View } from 'react-native'

export const Background = () => {
  return (
    <View 
        style={{
            position: 'absolute',
            backgroundColor: '#FFFFFF',
            top: -250,
            width: 880,
            height: 1000,
            transform: [
                { rotate: '-60deg'}
            ]
        }}
    />
  )
}
