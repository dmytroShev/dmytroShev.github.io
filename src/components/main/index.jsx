import React from 'react';
import s from './main.module.scss'
import Logo from '../../assets/images/logo.svg';
import Reward from '../../assets/images/icons/reward.svg';
import WIcon1 from '../../assets/images/icons/w1.svg';
import WIcon2 from '../../assets/images/icons/w2.svg';
import WIcon3 from '../../assets/images/icons/w3.svg';
import SubscriptionForm from "../subscribtionForm";
import Socials from "../socials";

const Main = () => {

  const handleSubmit = () => {
    console.log('submit')
  }

  return (
    <main className={s.main}>
      <section className={s.main__top}>
        <div className="container">
          <div className={s.main__top__wrap}>
            <div className={s.main__top__info}>
              <h1>Main liquidity market<br />
                on NEAR protocol</h1>
              <img src={Logo} alt="logo" className={s.main__top__logo} />
            </div>
            <SubscriptionForm handleSubmit={handleSubmit} />
          </div>
        </div>
      </section>
      <div className={s.main__bg}>
        <section className={s.main__about}>
          <div className="container">
            <h2 className={s.main__about__title}>About us</h2>
            <div className={s.main__about__row}>
              <div className={s.main__about__block}>
                <img src={Reward} alt="Reward"/>
                <div className={s.main__about__block__info}>
                  <h4>Near.Hack winner</h4>
                  <p>
                    The Near.Hack-winning solution is bringing
                    non-custodial borrowing and lending to the NEAR MainNet. Are you ready for liquidity protocol on the most user-friendly blockchain?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={s.main__why}>
          <div className="container">
            <h2 className={s.main__why__title}>Why choose us?</h2>
            <div className={s.main__why__list}>
              <div className={s.main__why__list__item}>
                <div className={s.main__why__list__item__img}>
                  <img src={WIcon1} alt="icon"/>
                </div>
                <p>
                  Liquidity market of NEAR ecosystem
                </p>
              </div>
              <div className={s.main__why__list__item}>
                <div className={s.main__why__list__item__img}>
                  <img src={WIcon2} alt="icon"/>
                </div>
                <p>
                  Flexible deposit management
                </p>
              </div>
              <div className={s.main__why__list__item}>
                <div className={s.main__why__list__item__img}>
                  <img src={WIcon3} alt="icon"/>
                </div>
                <p>
                  Easy-to-use
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className={s.main__contact}>
          <div className="container">
            <div className={s.main__contact__block}>
              <h2>Contact us</h2>
              <p>To learn more about our products<br /> and stay on top of the news</p>
              <div className={s.main__contact__block__socials}>
                <Socials />
              </div>
              <SubscriptionForm handleSubmit={handleSubmit} isContact />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;