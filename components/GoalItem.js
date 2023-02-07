import { View, Text, Button, Pressable } from "react-native";
import React from "react";

export default function GoalItem({ item, styles, removeGoal, onGoalPress }) {
  return (
    <Pressable android_ripple= {{color: "red"}} onPress={() => onGoalPress(item.id)}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{item.text}</Text>
        <Button
          color="black"
          title="X"
          onPress={() => {
            removeGoal(item.id);

          }}
        />
      </View>
    </Pressable>
  );
}
