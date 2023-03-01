import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

export default function GoalUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //get data here and update some state variables
    async function getUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("HTTP error happened with status: ", response.status);
        }
        //in json everything is a string
        const data = await response.json();
        const nameArray = data.map((userData) => {
          return userData.name;
        });
        setUsers(nameArray);
        console.log(nameArray);
      } catch (err) {
        console.log("get Users error:", err);
      }
    }
    getUsers();
  }, []);

  async function addUser() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: "Victor", id: Math.random() }),
        }
      );
      if (!response.ok) {
        throw new Error("HTTP error happened with status", response.status);
      }
      const data = await response.json();
      setUsers((prevUser) => [...prevUser, data.name]);
    } catch (err) {
      console.log("get Users error:", err);
    }
  }
  return (
    <View>
      <FlatList
        data={users}
        renderItem={(userData) => {
          return <Text>{userData.item}</Text>;
        }}
      />
      <Button title="Add me as a user" onPress={addUser} />
    </View>
  );
}
