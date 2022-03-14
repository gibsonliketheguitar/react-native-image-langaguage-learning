import { useSnackbar } from "notistack";
import React from "react";
import { Controller, useForm } from "react-hook-form";

import { loginExistingUser } from "../../firebase/userAuth";
import * as RootNavigation from "../routes/RootNavigation"

import Btn from "../common/Btn";
import Input from "../common/Input";

export default function Login() {
    const { enqueueSnackbar } = useSnackbar();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = async (data: any) => {
        function onSuccess() {
            RootNavigation.resetNav({
                index: 0,
                routes: [{ name: "Home" }],
            });
        }
        function onFail() {
            enqueueSnackbar(
                'Please check your login credentials',
                {
                    variant: 'error',
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'center'
                    }
                }
            )
        }

        await loginExistingUser({ data, onSuccess, onFail })
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