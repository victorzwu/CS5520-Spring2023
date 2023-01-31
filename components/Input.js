import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import React from "react";
import { useState } from "react";

export default function Input({ textUpdateFunction, modalVisible, onCancel }) {
  const [text, setText] = useState("");

  return (
    <Modal visible={modalVisible}>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png",
          }}
          style={{ height: 100, width: 100, margin: 10 }}
        />

        <TextInput
          style={{
            borderBottomColor: "blue",
            borderBottomWidth: 1,
            padding: 10,
          }}
          value={text}
          placeholder="Enter text here"
          onChangeText={(changedText) => {
            setText(changedText);
          }}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Confirm"
              onPress={() => {
                textUpdateFunction(text);
                setText("");
              }}
              disabled={!(text.length)}
            />
          </View>
          <View style={styles.button}>
            <Button color="red" title="Cancel" onPress={() => onCancel()} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    margin: 10,
  },
});
