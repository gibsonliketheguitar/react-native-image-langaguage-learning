import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { logout } from "../../firebase/userAuth";

export default function Logout({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text>Logout</Text>
            <Button
                title="Logout"
                onPress={() => logout()}
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