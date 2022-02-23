import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { readCollection } from './firebase/CRUD';

export default function App() {
  const [state, setState] = useState(false)
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      {state && <Text>Deez Nuts</Text>}
      <StatusBar style="auto" />
      <Button
        title='hello'
        onPress={() => readCollection('users')}
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
  },
});
