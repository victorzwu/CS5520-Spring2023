import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

export default function Login({signUpHandler, loginHandler}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChange={(newEmail) => setEmail(newEmail)}
        placeholder="Email"
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChange={(newPassword) => setPassword(newPassword)}
        placeholder="Password"
      />
      <Button title = "Register" onPress={signUpHandler}/>
      <Button title = "New User? Create an Account" onPress={loginHandler}/>
    </View>

  );
}
