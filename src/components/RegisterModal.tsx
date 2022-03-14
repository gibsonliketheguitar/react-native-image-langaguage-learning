import React from "react";
import { Button, Modal, Pressable, StyleSheet, Text, View } from "react-native";

interface IRegisterModal {
    isVisible: boolean,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function RegisterModal({ isVisible, setVisible }: IRegisterModal) {

    const handleClose = () => {
        setVisible(false)
    }

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={handleClose}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleClose}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
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
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
