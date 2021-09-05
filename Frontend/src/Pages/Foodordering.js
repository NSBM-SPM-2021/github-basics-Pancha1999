import React from "react";
import Order from "../assets/foods.jpg";
import "../Styles/Foodordering.css";
import {Link} from 'react-router-dom';
import { useHistory, useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "./axios.js";
import  {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


function Foodordering() {
    const { price } = useParams();
    const { name } = useParams();
    const [quantity, setQuantity] = useState('');
    const [fname, setFirstname] = useState('');
    const [address, setAddress] = useState('');
    const [mobileno, setMobilenumber] = useState('');
    const [type, setWay] = useState('');
    const [cash, setType] = useState('');
    const history = useHistory();

    function submit() {

        const order = { fname,address, mobileno, name,price,quantity,type,cash};
        axios.post('http://localhost:3001/order', order)
            .then(response =>
                    // console.log(response),
                    success(),
                history.push('/')
            )
            .catch(error => {
                erroralert()
                history.push('/')
                //this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }
    const success = () =>{
        toast.success('Your Appoinment booked!',{
            position:toast.POSITION.TOP_CENTER,
            autoClose:3000
        })
   }
       const erroralert = () =>{
           toast.error('Date Already Booked!',{
               position:toast.POSITION.TOP_LEFT,
               autoClose:3000
           })
   
       }


  return (
      
    <div className="foodorder">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Order})` }}
      ></div>
      <div className="rightSide">
        <h1>Order Your Choices!</h1>
        
            <div className="scroll-div">
                <div className="scroll-object">

                

            

        <form id="order form" method="POST" >
            
                <label htmlFor="name">Full Name</label> <br/>
                <input name="fname" placeholder="Enter the Full Name..." type="text" value={fname}
                             onChange={(e) => setFirstname(e.target.value)}/>
                <label htmlFor="address">Address</label> <br/>
                <input name="address" placeholder="Enter the Address..." type="text" value={address}
                             onChange={(e) => setAddress(e.target.value)}/>
                <label htmlFor="mobileno">Mobile No</label><br/>
                <input name="mobileno" placeholder="Enter the Mobile No..." type="number" alue={mobileno}
                             onChange={(e) => setMobilenumber(e.target.value)}/>
                <label htmlFor="quantity">Quantity</label><br/>
                <input name="quantity" placeholder="Enter the Quantity..." type="number" value={quantity}
                             onChange={(e) => setQuantity(e.target.value)}/>  
                <label htmlFor="payment">Payment Method</label>
               
                <div >
                    <table>
                        <tr onChange={(e) => setType(e.target.value)}>
                            <td>Cash</td>
                            <td style={{"height" : "25%", "width" : "20%"}}><input type="radio" value="cash" name="cash" /> </td>
                            <td>Card</td>
                            <td style={{"height" : "25%", "width" : "20%"}}><input type="radio" value="card" name="cash" /> </td>
                        </tr>
                    </table>
                    
   </div>
                    <label htmlFor="Food Category">Food Item</label>
                    {name}<br></br>
                    Rs.{price}
                    <label htmlFor="price">Total</label>
                   {price *quantity}
  
                <div >
                <label htmlFor="TorD">Select your way</label>
                    <table>
                        <tr onChange={(e) => setWay(e.target.value)}>
                            <td>Take Away</td>
                            <td style={{"height" : "20%", "width" : "15%"}}><input type="radio" value="takeaway" name="type" /> </td>
                            <td>Delivery</td>
                            <td style={{"height" : "20%", "width" : "15%"}}><input type="radio" value="Delivery" name="type" /> </td>
                        </tr>
                    </table>
                    
    
                    <Link to="/menu">
                
                <button onClick={submit}>ORDER</button>
                </Link>
   
                
   </div>
            </form>
            </div>
            </div>
            </div>
      </div>
    
  );
}

export default Foodordering;