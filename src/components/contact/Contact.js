import React from 'react';
import Phone from '../../images/phone.png';
import Email from '../../images/email.png';
// import Address from '../../images/address.png';
import './Contact.css';

const Contact = () => {
  return (
    <div className='c'>
      <div className='c-header'>
        <h1 className='c-head'>Contact</h1>
      </div>
      <div className='c-container'>              
        <div className='c-left'>
          <h3 className='c-title'>Reaching out to me</h3>
          <p className='c-text'>Don't hesitate to contact me! I'm happy to answer any questions, provide more information, or just have a nice conversation! Fill out the form below to being reaching out to me. If you prefer another email client other than your default, you can email me at the following address.</p>
          <div className='c-info'>
            <div className='c-info-item'>
              <img src={Phone} alt='phone' className='c-icon' /> +1 123 456 7888 
            </div>
            <div className='c-info-item'>
              <img src={Email} alt='email' className='c-icon' /> jenny@gmail.com 
            </div>
            {/* <div className='c-info-item'>
              <img src={Address} alt='address' className='c-icon' /> 123 Main Street, Glen Burnine, MD, 21061 
            </div> */}
          </div>
        </div>

        <div className='c-right'>
          <form className='form'>
            <div className='firstname'>
              <h4>First Name *</h4>
              <input type="text" placeholder='First Name' />
            </div>
            <div className='firstname'>
              <h4>Last Name *</h4>
              <input type="text" placeholder='Last Name' />
            </div>
            <div className='email'>
              <h4>Email *</h4>
              <input type="text" placeholder='Email' />
            </div>
            <div className='message'>
              <h4>Message *</h4>
              <textarea rows='5' placeholder='Message'></textarea>
            </div>
            <button className='c-btn'>Submit</button>
          </form>       
        </div>
      </div>
    </div>
  )
}

export default Contact;