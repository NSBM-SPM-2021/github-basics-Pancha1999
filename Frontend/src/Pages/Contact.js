import React from 'react'
import imgr from '../assets/noodles.jpg'
import '../Styles/Contact.css';
function Contact() {
    return (
        <div classname='contact'>
            <div classname='first' style={{ backgroundImage: `url(${imgr})` }}></div>
            <div classname='second'>
                <h1>
                    Contact Us
                </h1>
                <form id='contactform' method='POST'>
                    <label htmlFor='name'>
                         Name:

                    </label>
                    <input name='name' placeholder='Enter Name...' type='text'/>
                    <label htmlFor='email'>
                         Email:

                    </label>
                    <input name='email' placeholder='Enter  Email Address...' type='email'/>
                    <label htmlFor='message'>
                         Message:

                    </label>
                    <textarea name='message'  rows='5' placeholder='Enter message' required>

                    </textarea>
                    <button type='submit'>Send</button>

                </form>
            </div>
        </div>
    )
}

export default Contact
