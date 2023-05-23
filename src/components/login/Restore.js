import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

import ButtonAuth from '../button/ButtonAuth';
import InputText from '../inputText';

import Text48 from '../text/Text48';
import Text16 from '../text/Text16';

import { emailValidation } from '../../api/validation';

import './login.css';

const TYPE_SWAL = 'error';

const Restore = () => {
    const [email, setEmail] = React.useState('');

    const registration = () => {
        const correctEmail = emailValidation(email);
        if (correctEmail.isErr) {
            swal(correctEmail.title, correctEmail.description, TYPE_SWAL);
            return;
        }
        console.log(`Письмо отправлено на почту ${email}`);
    };
    return (
        <div className="cont-login">
            <Text48
                text="Восстановление
доступа"
                color="#483F36"
            />
            <div className="inputs">
                <InputText
                    label="Электронная почта"
                    value={email}
                    setValue={setEmail}
                />
            </div>
            <ButtonAuth
                text="Восстановить"
                authorization={registration}
                isRestore
            />
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

export default Restore;
