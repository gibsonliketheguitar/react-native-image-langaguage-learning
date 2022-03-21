import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSnackbar } from "notistack";
import { createNewCollection, getUserDoc } from "../../firebase/CRUD";
import Btn from "../common/Btn";

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
            onSuccess,
            onFail,
        })
    }

    const handleCreateNewStudy = () => {
        createNewCollection('collections', {
            default: 'Hello World'
        })
    }

    return (
        <View style={styles.container}>
            <Text>Home</Text>
            <Btn
                title="Create New Study"
                handleOnPress={handleCreateNewStudy}
            />
            <Btn
                title="Read"
                handleOnPress={handleReadUserDoc}
            />
            <Btn
                title="Logout"
                handleOnPress={() => navigation.navigate('Logout')}
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