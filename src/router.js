import { Routes, Route } from 'react-router-dom';
import React from 'react';

import Card from './components/card';
import Authorization from './components/login/Authorization';
import Registration from './components/login/Registration';
import Restore from './components/login/Restore';
import ConfirmEmail from './components/forUser/ConfirmEmail';

const Router = () => {
    return (
        <Routes>
            <Route index element={<Card />} />
            <Route path="/authorization" element={<Authorization />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/restore" element={<Restore />} />
            <Route path="/confirm-email/:token" element={<ConfirmEmail />} />
        </Routes>
    );
};

export default Router;
