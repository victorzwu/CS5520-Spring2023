import { View, Text, TextInput, Button } from "react-native";
import React from "react";
import { useState } from "react";

export default function Input({ textUpdateFunction }) {
  const [text, setText] = useState("");
  return (
    <View>
      <TextInput
        style={{ backgroundColor: "red" }}
        value={text}
        onChangeText={(changedText) => {
          setText(changedText);
        }}
      />
      <Button
        title="Confirm"
        onPress={() => {
          textUpdateFunction(text);
          setText("");
        }}
      />
    </View>
  );
}
