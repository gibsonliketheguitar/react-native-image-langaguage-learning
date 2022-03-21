import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useSnackbar } from "notistack";
import { getUserDoc, readCollection } from "../../firebase/CRUD";

export default function Home({ navigation }: any) {
    const { enqueueSnackbar } = useSnackbar();
    const handleReadUserDoc = () => {
        function onSuccess(data: any) {
            console.log('what is data', data)
        }

        function onFail(error: string) {
            enqueueSnackbar(
                error,
                {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center'
                    }
                }
            )
        }

        getUserDoc({
            userId: 'K0gMsV1uSDeYtCRILZiG6RIFiD3G',
            onSuccess,
            onFail,
        })
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Button
                title="Read"
                onPress={handleReadUserDoc}
            />
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