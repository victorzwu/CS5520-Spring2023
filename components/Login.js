import { View, Text, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase-setup";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      // console.log(userCred);
    } catch (err) {
      console.log("login err ", err);
    }
  };
  function signUpHandler() {
    navigation.replace("Signup");
  }

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={(newEmail) => setEmail(newEmail)}
        placeholder="Email"
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={(newPassword) => setPassword(newPassword)}
        placeholder="Password"
      />
      <Button title="Login" onPress={loginHandler} />
      <Button title="New User? Create an Account" onPress={signUpHandler} />
    </View>
  );
}
