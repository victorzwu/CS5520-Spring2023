import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function GoalDetails({ route }) {
  const navigation = useNavigation();

  //you can use navigation.setOptions here to set navigation options for 
  //the screen but then use it to call functions within the component screen
  return (
    <View>
      <Text>{route.params.item.text}</Text>
      <Button
        title="more details"
        onPress={() => {
          navigation.push("Details", {
            item: { id: "", text: "this is a new goal" },
          });
        }}
      />
    </View>
  );
}
