import React from 'react';
import cn from 'classnames';
import { ReactComponent as Arrow } from '../../assets/images/icons/arrow-r.svg';
import s from './subscription.module.scss';

const SubscriptionForm = ({ handleSubmit, isContact = false }) => {
  return (
    <div className={s.subscription}>
      <h3 className={s.subscription__title}>{isContact ? 'Subscribe for newsletter' : 'Liquidity Mining is coming …'}</h3>
      <div className={s.subscription__form}>
        <p>Get notified</p>
        <form className={cn(s.subscription__form__input, {[s.subscription__form__input__white]: isContact})} onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" />
          <span>We’ll give you only important updates. No spam or ads</span>
          <button type="submit" onClick={handleSubmit}><Arrow /></button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionForm;