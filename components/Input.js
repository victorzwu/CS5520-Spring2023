import { View, Text, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import React from "react";
import { useState } from "react";

export default function Input({ textUpdateFunction, modalVisible, onCancel }) {
  const [text, setText] = useState("");

  return (
    <Modal visible = {modalVisible}>
      
    <View style = {styles.container}>
    <Image source = {{uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png"}} style = {{height: 100, width: 100}}/>
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
      <Button title="Cancel" onPress={()=> onCancel()}/>
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