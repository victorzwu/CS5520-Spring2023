import { View, Text } from 'react-native'
import React from 'react'
import {getAuth} from 'firebase/auth'

export default function Signup() {
  return (
    <View>
      <Text>Signup</Text>
    </View>
  )
}

export const auth = getAuth(myApp)