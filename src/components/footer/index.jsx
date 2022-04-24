import React from 'react';
import s from './footer.module.scss';
import Logo from "../../assets/images/logo-footer.svg";
import Socials from "../socials";

const Footer = () => {
    return (
        <footer className={s.footer}>
          <div className="container">
            <div className={s.footer__block}>
              <div className={s.footer__block__links}>
                <img src={Logo} alt="logo"/>
                {/*<a href="#">Terms of use</a>*/}
                {/*<a href="#">Privacy policy</a>*/}
              </div>
              <Socials isDoc />
            </div>
          </div>
        </footer>
    );
};

export default Footer;