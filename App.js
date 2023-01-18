import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';

export default function App() {
  const name = "CS 5520";
  const [enteredText, setEnteredText] = useState('');
  function onTextEnter(changedText)
  {
    setEnteredText(changedText)
  }
  return (
      <View style={styles.container}>
      <Header appName = {name}/>
      <Input textUpdateFunction={onTextEnter}/>
      <Text>{enteredText}</Text>
      <StatusBar style="auto" />
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
