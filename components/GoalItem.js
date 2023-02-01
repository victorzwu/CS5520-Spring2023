import { View, Text, Button} from 'react-native'
import React from 'react'

export default function GoalItem({item, styles, removeGoal}) {
  return (
    <View style={styles.textContainer}>
    <Text style={styles.text}>{item.text}</Text>
    <Button color = "black" title = "X" onPress = {()=> {removeGoal(item.id);}} />
  </View>
  )
}