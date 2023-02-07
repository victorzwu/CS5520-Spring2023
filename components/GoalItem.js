import { View, Text, Button, Pressable } from "react-native";
import React from "react";

export default function GoalItem({ item, styles, removeGoal, onGoalPress }) {
  return (
    <View style={styles.textContainer}>
      <Pressable
        style={({pressed}) => {return [styles.textContainer, pressed && styles.pressedStyle]}}
        android_ripple={{ color: "red", foreground: "true" }}
        onPress={() => onGoalPress(item.id)}
      >
        <Text style={styles.text}>{item.text}</Text>
      </Pressable>
      <Button
        color="black"
        title="X"
        onPress={() => {
          removeGoal(item.id);
        }}
      />
    </View>
  );
}
