import React from 'react'
import Foods from '../assets/foods.jpg';
import '../Styles/About.css';

function About() {
    return (
        <div className='about'>
            <div className='aboutfirstpart'style={{ backgroundImage: `url(${Foods})` }}></div>
            <div className='aboutsecondpart'>
                <h1>
                    About Us
                </h1>
                <p>
                    The Resturant provide a healthy and precious foods for foods lovers.We are honored to give a good and quality service for your choices.Whether you're a good food lover we are hear for serve you a good and precious foods and service.!
                </p>
            </div>
        </div>
    )
}

export default About
