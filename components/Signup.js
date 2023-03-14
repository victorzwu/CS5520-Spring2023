import { View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { auth } from "../Firebase/firebase-setup";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const loginHandler = () => {
    navigation.replace("Login");
  };

  const signUpHandler = async () => {
    if (password !== confirmPassword) {
      Alert.alert("The passwords don't match");
    }
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log(userCred);
    } catch (err) {
      console.log("Auth error ", err);
    }
  };

  return (
    <View>
      <Text>Email Address</Text>
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
      <Text>Confirm password</Text>
      <TextInput
        value={confirmPassword}
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        placeholder="Confirm Password"
      />
      <Button title="Register" onPress={signUpHandler} />
      <Button title="Already Registered? Login" onPress={loginHandler} />
    </View>
  );
}
