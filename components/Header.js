import { View, Text } from 'react-native'
import React from 'react'

export default function Header(props) {
    console.log(props)
  return (
    <View>
      <Text>Header</Text>
      <Text>Welcome to {props.appName} {props.age} {props.color}</Text>
    </View>
  )
}