import { View, Text } from "react-native";
import React from "react";

export default function Header({ appName }) {
  //console.log(props)
  return (
    <View>
      <Text
        style={{
          borderColor: "purple",
          borderWidth: "1",
          padding: 5,
          margin: 5,
          color: "purple",
          fontWeight: "bold",
        }}
      >
        Welcome to {appName}
      </Text>
    </View>
  );
}
