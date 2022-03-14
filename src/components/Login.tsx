import React from "react";
import { Controller, useForm } from "react-hook-form";
import { loginExistingUser } from "../../firebase/userAuth";

import Btn from "../common/Btn";
import Input from "../common/Input";

export default function Login() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = async (data: any) => {
        loginExistingUser({ payload: data })
    }
    return (
        <>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        label="Email"
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
                        label="Password"
                        error={errors.password}
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                    />
                )}
                name="password"
            />

            <Btn title="Login" handleOnPress={handleSubmit(onSubmit)} />
        </>
    );
}