import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Image } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import Input from './components/Input';

export default function App() {
  const name = "CS 5520";
  const [enteredText, setEnteredText] = useState('');
  const [modalVisible, setModalVisible] = useState(false)
  function onTextEnter(changedText)
  {
    setEnteredText(changedText)
    setModalVisible(false)
  }
  function onCancel()
  {
    setModalVisible(false)
  }
  return (
      <View style={styles.container}>
      <Header appName = {name}/>
      <Input textUpdateFunction={onTextEnter} modalVisible={modalVisible} onCancel = {onCancel}/>
      <Button title = "Click to Input" onPress={()=> setModalVisible(true)}/>
      <Text style = {{color: 'purple'}}>{enteredText}</Text>
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
    margin: 10
  },
});
