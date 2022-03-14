import React from "react";
import { FieldError, Noop } from "react-hook-form";
import { Text, TextInput, StyleSheet } from "react-native";

interface IInput {
    error?: FieldError | undefined,
    onBlur: Noop,
    onChange: () => void,
    value: string
}

export default function Input({ onBlur, onChange, value, error }: IInput) {
    return (
        <>
            {error && <Text>This is required</Text>}
            <TextInput
                style={[styles.input,
                {
                    borderColor: error ? '#fc6d47' : '#c0cbd3'
                }]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
            />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '100%',
        height: 48,
        backgroundColor: 'gray',
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
})