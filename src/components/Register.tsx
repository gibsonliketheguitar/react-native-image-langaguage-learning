import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Modal, StyleSheet, View } from "react-native";
import { createNewUser } from "../../firebase/userAuth";

import Btn from "../common/Btn";
import Input from "../common/Input";

export default function Register() {
    const [isVisible, setVisible] = useState<boolean>(false);

    const handleOpen = () => {
        setVisible(true)
    }

    const handleClose = () => {
        setVisible(false)
    }

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: '',
            password2: '',
        }
    });
    const onSubmit = async (data: any) => {
        createNewUser({ payload: data })
    }

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={handleClose}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    label='Email'
                                    error={errors.email}
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                            name="email"
                        />
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                maxLength: 100,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    label='Password'
                                    error={errors.password}
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                            name="password"
                        />

                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                maxLength: 100,
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <Input
                                    label='Confirm'
                                    error={errors.password}
                                    onBlur={onBlur}
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                            name="password2"
                        />

                        <Btn title="Register" handleOnPress={handleSubmit(onSubmit)} />
                        <Btn title="Cancel" handleOnPress={handleClose} />
                    </View>
                </View>
            </Modal>
            <Btn
                title='Register'
                handleOnPress={handleOpen}
            />
        </>
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
