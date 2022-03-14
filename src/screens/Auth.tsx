import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Btn from '../common/Btn';
import { default as Modal } from '../components/RegisterModal'

export default function Auth({ navigation }: any) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Btn
                title="Login"
                handleOnPress={() => navigation.navigate('Logout')}
            />
            <Modal isVisible={modalVisible} setVisible={setModalVisible} />
            <Btn
                title='Register'
                handleOnPress={() => setModalVisible(true)}
            />
        </View>
    );
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
