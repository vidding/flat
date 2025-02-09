import { Meta, Story } from "@storybook/react";
import { message } from "antd";
import React from "react";
import { LoginWithPassword, LoginWithPasswordProps, PasswordLoginType } from ".";

const storyMeta: Meta = {
    title: "LoginPage/LoginWithPassword",
    component: LoginWithPassword,
};

export default storyMeta;

export const Overview: Story<LoginWithPasswordProps> = props => {
    return <LoginWithPassword {...props} />;
};

Overview.args = {
    login: (type: PasswordLoginType, { key }, password: string) => {
        message.info("login with " + type + " to " + key + ". And the password is: " + password);
        return new Promise(resolve => setTimeout(() => resolve(false), 1000));
    },
    register: () => {
        message.info("to register page");
    },
    onClickButton: (provider: string) => {
        message.info("login with " + provider);
    },
    loginWithVerificationCode: () => {
        message.info("login with verification code");
    },
    sendVerificationCode: (type: PasswordLoginType, key: string) => {
        message.info("send code with " + type + " to " + key);
        return new Promise(resolve => setTimeout(() => resolve(false), 1000));
    },
    resetPassword: (type: PasswordLoginType, { key }, code: string, password: string) => {
        message.info(
            "reset password with " +
                type +
                " to " +
                key +
                ". The code is: " +
                code +
                ". And Password is: " +
                password,
        );
        return new Promise(resolve => setTimeout(() => resolve(false), 1000));
    },
};
