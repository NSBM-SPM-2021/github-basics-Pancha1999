import React from 'react'
import imgf from '../assets/r1.jpg'

function Foodordering() {
    return (
        <div className='foodorder'>
            <div classname='first' style={{ backgroundImage: `url(${imgf})` }}></div>
            <div classname='second'>
                <h1>
                    Order your choices
                </h1>
                <form id='foodorderform' method='POST'>
                    <label htmlFor='name'>
                         Name:

                    </label>
                    <input name='name' placeholder='Enter Name...' type='text'/>
                    <label htmlFor='phonenumber'>
                         Phone No:

                    </label>
                    <input name='phoneno' placeholder='Enter phone number...' type='phonenumber'/>
                    <label htmlFor='number'>
                         Quantity:

                    </label>
                    <input name='quantity'  type='number'/>
                    <label htmlFor='price'>
                         price:

                    </label>
                    <input name='quantity'  type='number'/>


                    
                    <button type='submit'>Send</button>

                </form>
            </div>
        </div>
    )
}

export default Foodordering
