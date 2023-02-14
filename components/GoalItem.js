import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import PressableButton from "./PressableButton";
import { FontAwesome } from "@expo/vector-icons";

export default function GoalItem({ item, styles, removeGoal, onGoalPress }) {
  return (
    <Pressable
      style={(data) => {
        return [styles.textContainer, data.pressed && styles.pressedStyle];
      }}
      // android_ripple={{ color: "red", foreground: "true" }}
      onPress={() => onGoalPress(item)}
    >
      <Text style={styles.text}>{item.text}</Text>

      {/* <Button
        color="black"
        title="X"
        onPress={() => {
          removeGoal(item.id);
        }}
      /> */}
      <PressableButton styles={styles} onPress={() => removeGoal(item.id)}>
        <FontAwesome name="trash" size={24} color="black" />
      </PressableButton>
    </Pressable>
  );
}
