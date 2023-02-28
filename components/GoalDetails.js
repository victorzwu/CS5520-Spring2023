import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import GoalUsers from "./GoalUsers";
import { FontAwesome } from "@expo/vector-icons";


export default function GoalDetails({ route }) {
  const navigation = useNavigation();
  function iconPressed() {
    console.log("icon pressed from Goal Details");
  }
  //you can use navigation.setOptions here to set navigation options for
  //the screen but then use it to call functions within the component screen

  useEffect(() => {
    navigation.setOptions({
      title: route.params.item.text,
      headerRight: () => {
        return (
          <FontAwesome
            name="warning"
            size={24}
            color="#eee"
            onPress={iconPressed}
          />
        );
      },
    });
  });

  return (
    <View>
      <Text>
        You are viewing details of {route.params.item.text} with id:{" "}
        {route.params.item.id}
      </Text>
      <GoalUsers />
      {/* <Button
        title="more details"
        onPress={() => {
          navigation.push("Details", {
            item: { id: "", text: "this is a new goal" },
          });
        }}
      /> */}
    </View>
  );
}
