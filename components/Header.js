import { View, Text, Dimensions } from "react-native";
import React from "react";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Header({ appName }) {
  //console.log(props)
  return (
    <View>
      <Text
        style={{
          borderColor: "purple",
          borderWidth: 1,
          padding: 5,
          margin: 5,
          fontSize: windowWidth>380? 36: 24,
          color: "purple",
          fontWeight: "bold",
          width: 350,
          maxWidth: "80%",
          
        }}
      >
        Welcome to {appName}
      </Text>
    </View>
  );
}
