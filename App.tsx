import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createNewCollection, readCollection } from './firebase/CRUD';
import Btn from './src/common/Btn';

export default function App() {
  const [state, setState] = useState(false)
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {state && <Text>Deez Nuts</Text>}
      <StatusBar style="auto" />
      <Btn
        title='hello'
        handleOnPress={() => createNewCollection('users', { test: 'help' })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 28
  },
});
