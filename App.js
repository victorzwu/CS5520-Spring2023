import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View, Button, Image } from "react-native";
import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";

export default function App() {
  const name = "CS 5520";
  // const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  function onTextEnter(changedText) {
    let newGoal = { id: Math.random(), text: changedText  };
    // setGoals([...goals, newGoal])
    //console.log(goals) <- we don't know when this is done because it's asynchronous
    setGoals((prevGoals) => [...prevGoals, newGoal]);
    //this makes sure the latest value for the state variable is used
    setModalVisible(false);
  }
  function onCancel() {
    setModalVisible(false);
  }
  return (
    <View style={styles.container}>
      <View style={styles.smallContainer}>
        <Header appName={name} />
        <Input
          textUpdateFunction={onTextEnter}
          modalVisible={modalVisible}
          onCancel={onCancel}
        />
        <Button title="Click to Input" onPress={() => setModalVisible(true)} />
      </View>
      <View style={styles.bigContainer}>
        {goals.map((goal) => {
          return (
            <View style={styles.textContainer}>
              <Text style={styles.text}>{goal.text}</Text>
            </View>
          );
        })}
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "stretch",
    justifyContent: "center",
    margin: 10,
  },
  smallContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bigContainer: {
    flex: 4,
    backgroundColor: "lightgrey",
    alignItems: "center",
  },
  textContainer: {
    borderColor: "grey",
    backgroundColor: "grey",
    borderRadius: 5,
    borderWidth: 2,
    margin: 5
  },
  text: {
    color: "purple",
    padding: 5
  },
});
