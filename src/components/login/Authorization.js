import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

import ButtonAuth from '../button/ButtonAuth';
import InputText from '../inputText';

import Text48 from '../text/Text48';
import Text16 from '../text/Text16';

import { loginValidation, passwordValidation } from '../../api/validation';

import './login.css';

const TYPE_SWAL = 'error';

const Authorization = () => {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const authorization = () => {
        const correctLogin = loginValidation(login);
        if (correctLogin.isErr) {
            swal(correctLogin.title, correctLogin.description, TYPE_SWAL);
            return;
        }
        const correctPassword = passwordValidation(password);
        if (correctPassword.isErr) {
            swal(correctPassword.title, correctPassword.description, TYPE_SWAL);
            return;
        }
        console.log(`Авторизация ${login} ${password}`);
    };
    return (
        <div className="cont-login">
            <Text48 text="Авторизация" color="#483F36" />
            <div className="inputs">
                <InputText
                    label="Имя пользователя"
                    value={login}
                    setValue={setLogin}
                />
                <InputText
                    label="Пароль"
                    type="password"
                    value={password}
                    setValue={setPassword}
                />
            </div>
            <ButtonAuth text="Войти" authorization={authorization} />
            <div className="switches">
                <Link to="/registration" className="link-reset switch-form">
                    <Text16
                        text="Нет аккаунта? Зарегистрируйся!"
                        color="#00529E"
                    />
                </Link>
                <Link to="/restore" className="link-reset switch-form">
                    <Text16 text="Забыли пароль?" color="#9E0000" />
                </Link>
            </div>
        </div>
    );
};

export default Authorization;
