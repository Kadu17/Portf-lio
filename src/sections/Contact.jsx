import React, { useState } from 'react';
import styles from '../sections/ContactStyles.module.css';
import emailjs from '@emailjs/browser'; 

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };

    emailjs.send("service_84ivnen", "template_zahzezt", templateParams, "hQGlN1npLV0Ql2Uav")
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.log("ERRO: ", error);
      });
  };

  return (
    <section className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={sendEmail}>
        <div className='formGroup'>
          <label htmlFor="name" hidden>Name</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor="email" hidden>Email</label>
          <input
            type='email' 
            name='email'
            id='email'
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor="message" hidden>Message</label>
          <textarea
            name='message'
            id='message'
            placeholder='Message'
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" autoComplete="name" />
      </form>
    </section>
  );
}

export default Contact;
