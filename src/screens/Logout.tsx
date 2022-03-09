import React from "react";
import { Button, Text, View } from "react-native";

export default function Logout({ navigation }: any) {
    return (
        <View>
            <Text>Logout</Text>
            <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}