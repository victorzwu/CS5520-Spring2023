import { View, Text } from 'react-native'
import React from 'react'

export default function GoalDetails({route}) {
  return (
    <View>
      <Text>id: {route.params.id}</Text>
      <Text>text: {route.params.text}</Text>
    </View>
  )
}