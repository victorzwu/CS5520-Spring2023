import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
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
  }
  return (
      <View style={styles.container}>
      <Header appName = {name}/>
      <Input textUpdateFunction={onTextEnter} modalVisible={modalVisible} setModalVisible = {setModalVisible}/>
      <Button title = "Modal" onPress={()=> setModalVisible(true)}/>
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
