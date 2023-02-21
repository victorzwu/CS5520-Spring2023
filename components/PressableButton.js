import { View, Text, Pressable, Button } from "react-native";
import React from "react";

export default function PressableButton({styles, onPress, children}) {
  return (
    <Pressable
    style={({pressed}) => {
      return [styles.pressableButtonUnpressed, pressed ? styles.pressableButtonPressed : null];
    }}
    onPress = {()=> onPress()}
    >
      {children}
    </Pressable>
  );
}
