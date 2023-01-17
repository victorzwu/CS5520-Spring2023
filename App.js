import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  const name = "CS 5520";
  const [text, setText] = useState('');
  return (
      <View style={styles.container}>
      <Header appName = {name} age = "5" color = "Blue"/>
      <StatusBar style="auto" />
      <TextInput 
      style = {{backgroundColor: "red"}}
      value={text} onChangeText={(changedText) => {setText(changedText)}}/>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
