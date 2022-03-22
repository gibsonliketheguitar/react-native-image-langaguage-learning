import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { logout } from "../../firebase/userAuth";
import * as RootNavigation from "../routes/RootNavigation";

export default function Create() {
    const handleSignout = () => {
        function onSuccess() {
            RootNavigation.resetNav({
                index: 0,
                routes: [{ name: "Auth" }],
            });
        }
        logout({ onSuccess })
    }
    return (
        <View style={styles.container}>
            <Text>Logout</Text>
            <Button
                title="Logout"
                onPress={handleSignout}
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