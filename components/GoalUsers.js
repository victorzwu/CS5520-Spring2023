import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";

export default function GoalUsers() {
  const[users, setUsers] = useState([]);

  useEffect(() => {
    //get data here and update some state variables
    async function getUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if(!response.ok)
        {
            throw new Error("HTTP error happened");
        }
        const data = await response.json();
        const nameArray = data.map((userData)=>{return userData.name})
        setUsers(nameArray);
        console.log(nameArray)
      } catch (err) {
        console.log("get Users error:", err);
      }
    }
    getUsers();
  }, []);
  return (
    <View>
      <FlatList data={users}
          renderItem={({ item }) => {
            return (
              <Text>{item}</Text>
            );
          }}/>
    </View>
  );
}
