import React, { useState } from 'react';
import { useInput } from '../hooks/useInput';

const ContactForm = () => {
  const { value: name, bind: bindName, reset: resetName } = useInput('');
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput(
    ''
  );
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setFormSubmitted(false);

    const {
      REACT_APP_EMAILJS_TEMPLATEID: template,
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_USERID: user
    } = process.env;

    sendMessage(name, email, message, template, receiverEmail, user);

    resetName();
    resetEmail();
    resetMessage();
  };

  const sendMessage = (
    name,
    email,
    message,
    templateId,
    receiverEmail,
    user
  ) => {
    window.emailjs
      .send(
        'default_service',
        'contact_form',
        {
          name,
          email,
          message
        },
        user
      )
      .then(res => {
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
        }, 3000);
      })
      .catch(e => console.log('Failed to send message. Error: ', e));
  };

  return (
    <div className='contact-form__box'>
      <form
        className='contact-form__form'
        id='contact-form'
        onSubmit={handleSubmit}
      >
        <h2 className='contact-form__title'>Contact me...</h2>
        {formSubmitted ? (
          <p className='contact-form__message-sent--active'>
            Success! Your message has been sent.
          </p>
        ) : (
          <p className='contact-form__message-sent'>
            Success! Your message has been sent.
          </p>
        )}
        <input
          className='contact-form__name'
          type='text'
          name='name'
          placeholder='Full name'
          {...bindName}
          required
        />

        <input
          className='contact-form__email'
          type='email'
          name='email'
          placeholder='Email'
          {...bindEmail}
          required
        />

        <textarea
          className='contact-form__message'
          name='message'
          id='message'
          cols='30'
          rows='20'
          placeholder='Your message'
          {...bindMessage}
          required
        ></textarea>
        <input className='btn btn--submit' type='submit' value='Send →' />
      </form>
    </div>
  );
};

export default ContactForm;
