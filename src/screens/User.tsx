import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createNewCollection } from '../../firebase/CRUD';
import Btn from '../common/Btn';

export default function User({ navigation }: any) {
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
            <Btn
                title="Logout"
                handleOnPress={() => navigation.navigate('Logout')}
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
