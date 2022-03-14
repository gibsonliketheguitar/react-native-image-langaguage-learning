import React from "react";
import { FieldError, Noop } from "react-hook-form";
import { Text, TextInput, StyleSheet, View } from "react-native";

interface IInput {
    error?: FieldError | undefined,
    label?: string,
    onBlur: Noop,
    onChange: () => void,
    value: string
}

export default function Input({ label, onBlur, onChange, value, error }: IInput) {
    return (
        <View style={styles.container}>
            {error && <Text style={styles.error}>This is required</Text>}
            {label && !error && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={[styles.input,
                {
                    borderColor: error ? '#fc6d47' : '#c0cbd3'
                }]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    error: {
        color: '#fc6d47'
    },
    label: {
        color: 'black'
    },
    input: {
        width: '100%',
        height: 48,
        backgroundColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
    }
})