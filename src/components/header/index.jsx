import React from 'react';
import s from './header.module.scss';
import Logo from '../../assets/images/logo.svg';
import Socials from "../socials";

const Header = () => {
    return (
        <header className={s.header}>
          <div className="container">
            <div className={s.header__block}>
              <img src={Logo} alt="logo"/>
              <Socials isDoc />
            </div>
          </div>
        </header>
    );
};

export default Header;