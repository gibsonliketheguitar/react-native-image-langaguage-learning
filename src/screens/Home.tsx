import React from "react";
import { Button, View } from "react-native";

export default function Home({ navigation }: any) {
    return (
        <View>
            <Button
                title="Home"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
    )
}