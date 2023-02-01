import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";

export default function App() {
  const name = "CS 5520";
  // const [enteredText, setEnteredText] = useState("");
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  function onTextEnter(changedText) {
    let newGoal = { id: Math.random(), text: changedText };
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
        <FlatList
          data={goals}
          renderItem={({item}) => {
            return (
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.text}</Text>
              </View>
            );
          }}
        />
        {/* <ScrollView
          alwaysBounceVertical={false}
          contentContainerStyle={styles.scrollViewContentContainer}
        >
          {goals.map((goal) => {
            return (
              <View key={goal.id} style={styles.textContainer}>
                <Text style={styles.text}>{goal.text}</Text>
              </View>
            );
          })}
          <StatusBar style="auto" />
        </ScrollView> */}
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
    alignItems: "center"
  },
  scrollViewContentContainer: {
    alignItems: "center",
  },
  textContainer: {
    borderColor: "grey",
    backgroundColor: "grey",
    borderRadius: 5,
    borderWidth: 2,
    margin: 5,
    alignItems: "center"
  },
  text: {
    color: "purple",
    padding: 5,
    fontSize: 30,
  },
});
