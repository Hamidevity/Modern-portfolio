import React from 'react'
import './contact.css';
import {MdOutlineEmail } from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

const Contact = () => {
  return (
    <section className="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>


      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__options">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5> 111111@gmail.com</h5>
            <a href="mailto:zame800@gmail.com">send message</a>
          </article>
          <article className="contact__options">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5> 111111@gmail.com</h5>
            <a href="mailto:zame800@gmail.com">send message</a>
          </article>
          <article className="contact__options">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Email</h4>
            <h5> 11111@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone=+989017357264">send message</a>
          </article>
        </div>
        <form action="">
          <input type='text' name='name' placeholder='your full name ' required/>
          <input type='email' name='email' placeholder='your email ' required/>
          <textarea name="message"  rows="7" placeholder='your massage' required></textarea>
          <button type='submit' className='btn btn-primary'>send message</button>
        </form>
      </div>
    </section>

  )
}

export default Contact