import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function Input({textUpdateFunction}) {
    const [text, setText] = useState('');
    return (
        <View>
        <TextInput 
        style = {{backgroundColor: "red"}}
        value={text}
        onChangeText={(changedText) => {
            textUpdateFunction(changedText)
            setText(changedText)}}/>
        {/* <Text>{text}</Text> */}
    </View>
  )
}