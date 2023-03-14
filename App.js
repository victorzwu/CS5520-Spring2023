import { View, Text, Button, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import Home from "./Home";
import GoalDetails from "./components/GoalDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome } from "@expo/vector-icons";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/firebase-setup";
import Profile from "./components/Profile";
import { signOut } from "firebase/auth";

const Stack = createNativeStackNavigator();

const AuthStack = (
  <>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
  </>
);

const AppStack = (
  <>
    <Stack.Screen
      options={({ navigation }) => {
        return {
          title: "All My Goals",
          headerRight: () => {
            return (
              <FontAwesome
                name = "Profile"
                size={24}
                color="#eee"
                onPress={() => navigation.navigate("Profile")}
              />
            );
          },
        };
      }}
      name="Home"
      component={Home}
    />
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
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerRight: () => {
          return (
            <FontAwesome
              name="logout"
              size={24}
              color="#eee"
              onPress={() => {
                signOut(auth);
              }}
            />
          );
        },
      }}
    />
  </>
);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "purple" },
          headerTintColor: "pink",
        }}
      >
        {isAuthenticated ? AppStack : AuthStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
