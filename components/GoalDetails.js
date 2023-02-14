import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function GoalDetails({route}) {
    const navigation = useNavigation()
  return (
    <View>
      <Text>{route.params.item.text}</Text>
      <Button
      title = "more details"
      onPress= {() => {
        navigation.push("Details", {item: {id: "", text: "this is a new goal"}})
      }}
       />
    </View>
  )
}