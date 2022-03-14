import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Home({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
                title="Logout"
                onPress={() => navigation.navigate('Logout')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        marginHorizontal: 28
    },
})