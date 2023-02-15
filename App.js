import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import Home from "./Home";
import GoalDetails from "./components/GoalDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "pink",
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Details"
          component={GoalDetails}
          options={({ route }) => {
            return {
              headerRight: () => {
                return (
                <Pressable onPress={() => console.log("flag")}>
                  <FontAwesome name="font-awesome" size={24} color="black" />
                </Pressable>
                );
              },
              title: route.params.item.text,
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
