import React, {useState} from 'react';
import cn from 'classnames';
import { ReactComponent as Arrow } from '../../assets/images/icons/arrow-r.svg';
import { ReactComponent as SuccessIcon } from '../../assets/images/icons/success.svg';
import { ReactComponent as ErrorIcon } from '../../assets/images/icons/close.svg';
import s from './subscription.module.scss';
import {subscribeMailgun} from "../../services/mail";

const regex = new RegExp('[a-z0-9]+@[a-z]+\\.[a-z]{2,3}');

const SubscriptionForm = ({ isContact = false }) => {
  const [inputEmail, setInputEmail] = useState('');
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isSuccessEmail, setIsSuccessEmail] = useState(false);
  const [msgEmail, setMsgEmail] = useState('')

  const handleOnChangeEmail = (value) => {
    setInputEmail(value);
    setIsErrorEmail(false)
    setIsSuccessEmail(false)
    setMsgEmail('')
  }

  const handleReset = () => {
    setInputEmail('');
    setIsErrorEmail(false)
    setIsSuccessEmail(false)
    setMsgEmail('')
  }


  const handleSubmit = async () => {
    if (!regex.test(inputEmail)) {
      setMsgEmail('Invalid email address')
      setIsErrorEmail(true);
      return;
    }

    try {
      await subscribeMailgun({ email: inputEmail })
      setIsSuccessEmail(true);
      setInputEmail('Thanks for subscribing!');
    } catch (e) {
      setIsErrorEmail(true);
      setMsgEmail(e.message)
    }
  }

  return (
    <div className={s.subscription}>
      <h3 className={s.subscription__title}>{isContact ? 'Subscribe for newsletter' : 'Liquidity Mining is coming …'}</h3>
      <div className={s.subscription__form}>
        <p>Get notified</p>
        <form className={
          cn(s.subscription__form__input,
            {[s.subscription__form__input__white]: isContact},
            {[s.subscription__form__input__error]: isErrorEmail},
            {[s.subscription__form__input__success]: isSuccessEmail},
          )} onSubmit={e => e.preventDefault()}>
          <input value={inputEmail} onChange={e => handleOnChangeEmail(e.target.value)} type="text" placeholder="Enter your email" />

          <span>{isErrorEmail ? msgEmail : 'We’ll give you only important updates. No spam or ads' }</span>
          {isSuccessEmail ? (
            <button type="submit" onClick={handleReset}>
              <SuccessIcon />
            </button>
          ) : isErrorEmail ? (
            <button type="submit" onClick={handleReset}>
              <ErrorIcon />
            </button>
          ) : (
            <button type="submit" onClick={handleSubmit}>
              <Arrow />
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;