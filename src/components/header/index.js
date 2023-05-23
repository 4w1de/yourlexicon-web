import React from 'react';

import { HeaderText } from '../text';

import './header.css';
import Logo from '../../img/logo.png';
import Menu from '../menu';

const Header = () => {
    return (
        <div className="cont-header">
            <img src={Logo} alt="Logo" width={84} height={64} />
            <HeaderText text="Your lexicon" />
            <Menu />
        </div>
    );
};

export default Header;
