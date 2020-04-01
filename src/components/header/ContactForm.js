import React, { useState } from 'react';
import { useInput } from '../hooks/useInput';

const ContactForm = () => {
  const { value: name, bind: bindName, reset: resetName } = useInput('');
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput('');
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput(
    ''
  );
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [sendingForm, setSendingForm] = useState(false);
  const [error, setError] = useState(false);

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
    setSendingForm(true);
    setError(false);
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
        setSendingForm(false);
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
        }, 3000);
      })
      .catch(e => {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
        console.log('Failed to send message. Error: ', e);
      });
  };

  return (
    <div className='contact-form__container'>
      <form
        className='contact-form__form'
        id='contact-form'
        onSubmit={handleSubmit}
      >
        <h2 className='contact-form__title'>How can I help? </h2>
        <label className='contact-form__label' htmlFor='name'>
          Name <span className='contact-form__label--asterisk'>*</span>
        </label>
        <input
          className='contact-form__name'
          type='text'
          name='name'
          {...bindName}
          required
        />

        <label className='contact-form__label' htmlFor='email'>
          Email <span className='contact-form__label--asterisk'>*</span>
        </label>
        <input
          className='contact-form__email'
          type='email'
          name='email'
          {...bindEmail}
          required
        />

        <label className='contact-form__label' htmlFor='message'>
          Message <span className='contact-form__label--asterisk'>*</span>
        </label>
        <textarea
          className='contact-form__message'
          name='message'
          id='message'
          cols='30'
          rows='20'
          {...bindMessage}
          required
        ></textarea>
        {formSubmitted ? (
          <p className='contact-form__message-sent--active'>
            Success! Message received ✓
          </p>
        ) : (
          ''
        )}
        {sendingForm ? (
          <p className='contact-form__message-sent--active'>Sending...</p>
        ) : (
          ''
        )}
        {error ? (
          <p className='contact-form__message-sent--active'>
            There was an error ¯\_(ツ)_/¯
          </p>
        ) : (
          ''
        )}
        <input className='contact-form__button' type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default ContactForm;
