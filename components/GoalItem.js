import { View, Text } from 'react-native'
import React from 'react'

export default function GoalItem({item, styles}) {
  return (
    <View style={styles.textContainer}>
    <Text style={styles.text}>{item.text}</Text>
  </View>
  )
}