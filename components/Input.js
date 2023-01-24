import { View, Text, TextInput, Button, StyleSheet, Modal } from "react-native";
import React from "react";
import { useState } from "react";

export default function Input({ textUpdateFunction, modalVisible, setModalVisible }) {
  const [text, setText] = useState("");

  return (
    <Modal visible = {modalVisible}>
    <View style = {styles.container}>
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
          setModalVisible(false);
        }}
      />
    </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});