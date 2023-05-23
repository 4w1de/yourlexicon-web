import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

import CloseIcon from '../../img/closeIcon.png';
import Text40 from '../text/Text40';
import Text32 from '../text/Text32';

const Menu = () => {
    const [menuIsOpen, setMenuIsOpen] = React.useState('menu');
    React.useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                setMenuIsOpen('menu');
            }
        };
        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, []);
    return (
        <div className="cont-menu">
            <div
                className="cont-burger"
                onClick={() => {
                    setMenuIsOpen('menu menu-is-open');
                }}>
                <div className="burger" />
            </div>
            {menuIsOpen === 'menu' ? <></> : <div className="shadow"></div>}
            <div className={menuIsOpen}>
                <img
                    src={CloseIcon}
                    width={47}
                    height={47}
                    alt="close"
                    onClick={() => {
                        setMenuIsOpen('menu');
                    }}
                    className="close-icon"
                />
                <div className="list-menu">
                    <Link
                        to={'/authorization'}
                        className="menu-a"
                        onClick={() => {
                            setMenuIsOpen('menu');
                        }}>
                        <Text40 text="Войти / " />
                    </Link>
                    <Link
                        to={'/registration'}
                        className="menu-a"
                        onClick={() => {
                            setMenuIsOpen('menu');
                        }}>
                        <Text32 text="Зарегистрироваться" />
                    </Link>
                    <a
                        href="https://translate.google.com/?en=ru"
                        className="menu-a menu-a--group">
                        <Text40 text="О сайте" />
                    </a>
                    <a
                        href="https://translate.google.com/?en=ru"
                        className="menu-a">
                        <Text40 text="Контакты" />
                    </a>
                    <a
                        href="https://translate.google.com/?en=ru"
                        className="menu-a">
                        <Text40 text="Обратная связь" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Menu;
