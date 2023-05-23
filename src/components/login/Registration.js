import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

import { SIGNUP } from '../../constants/urls';

import ButtonAuth from '../button/ButtonAuth';
import InputText from '../inputText';

import Text48 from '../text/Text48';
import Text16 from '../text/Text16';

import {
    loginValidation,
    passwordValidation,
    emailValidation,
    comparePasswords,
} from '../../api/validation';

import './login.css';

const TYPE_SWAL = 'error';

const Registration = () => {
    const [login, setLogin] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [repeatPassword, setRepeatPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');

    const registration = () => {
        const correctLogin = loginValidation(login);
        if (correctLogin.isErr) {
            swal(correctLogin.title, correctLogin.description, TYPE_SWAL);
            return;
        }
        const correctEmail = emailValidation(email);
        if (correctEmail.isErr) {
            swal(correctEmail.title, correctEmail.description, TYPE_SWAL);
            return;
        }
        const correctPassword = passwordValidation(password);
        if (correctPassword.isErr) {
            swal(correctPassword.title, correctPassword.description, TYPE_SWAL);
            return;
        }
        const correctRepeatPassword = passwordValidation(repeatPassword);
        if (correctRepeatPassword.isErr) {
            swal(
                correctRepeatPassword.title,
                correctRepeatPassword.description,
                TYPE_SWAL,
            );
            return;
        }
        const correctPasswords = comparePasswords(password, repeatPassword);
        if (correctPasswords.isErr) {
            swal(
                correctPasswords.title,
                correctPasswords.description,
                TYPE_SWAL,
            );
            return;
        }
        axios
            .post(SIGNUP, {
                user: {
                    userName: login,
                    email,
                    password,
                    firstName,
                    lastName,
                },
            })
            .then(({ data }) => {
                console.log(data);
                const { payload } = data;
                if (data.type === 'incorrect') {
                    swal(payload.title, payload.message, 'warning');
                } else if (data.type === 'error') {
                    swal(payload.title, payload.message, 'error');
                } else {
                    swal(payload.title, payload.message, 'success');
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <div className="cont-login">
            <Text48 text="Регистрация" color="#483F36" />
            <div className="inputs">
                <InputText
                    label="Имя пользователя"
                    value={login}
                    setValue={setLogin}
                />
                <InputText
                    label="Электронная почта"
                    value={email}
                    setValue={setEmail}
                />
                <InputText
                    label="Пароль"
                    type="password"
                    value={password}
                    setValue={setPassword}
                />
                <InputText
                    label="Повтор пароля"
                    type="password"
                    value={repeatPassword}
                    setValue={setRepeatPassword}
                />
                <InputText
                    label="Имя (необязательно)"
                    value={firstName}
                    setValue={setFirstName}
                    isRequired={false}
                />
                <InputText
                    label="Фамилия (необязательно)"
                    value={lastName}
                    setValue={setLastName}
                    isRequired={false}
                />
            </div>
            <ButtonAuth text="Создать" authorization={registration} />
            <div className="switches">
                <Link to="/authorization" className="link-reset switch-form">
                    <Text16
                        text="Есть аккаунт? Авторизируйся!"
                        color="#00529E"
                    />
                </Link>
            </div>
        </div>
    );
};

export default Registration;
