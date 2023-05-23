import React from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import ClockLoader from 'react-spinners/ClockLoader';
import swal from 'sweetalert';

import { CONFIRM } from '../../constants/urls';

import Text16 from '../text/Text16';

import './forUser.css';

const ConfirmEmail = () => {
    const token = useParams().token;
    const [confirm, setConfirm] = React.useState(false);
    React.useEffect(() => {
        if (token) {
            axios
                .post(CONFIRM, { token })
                .then(({ data }) => {
                    if (data.type === 'confirm') {
                        setConfirm(true);
                    } else {
                        swal(data.type, data.payload.message, 'error');
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [token]);
    return (
        <div className="cont-info-for-user">
            {!confirm ? (
                <div className="loading">
                    <ClockLoader size={200} color="#765738" />
                    <Text16 text="Подождите" />
                </div>
            ) : (
                <p className="fs24 taCenter">
                    Email подтвержден! Можете теперь{' '}
                    <Link to="/authorization">авторизироваться</Link>!
                </p>
            )}
        </div>
    );
};

export default ConfirmEmail;
