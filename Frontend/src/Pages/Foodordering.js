import React from "react";
import Order from "../assets/foods.jpg";
import "../Styles/Foodordering.css";
import {Link} from 'react-router-dom';

function Foodordering() {
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
                <input name="name" placeholder="Enter the Full Name..." type="text"/>
                <label htmlFor="address">Address</label> <br/>
                <input name="address" placeholder="Enter the Address..." type="text"/>
                <label htmlFor="mobileno">Mobile No</label><br/>
                <input name="mobileno" placeholder="Enter the Mobile No..." type="number"/>
                <label htmlFor="quantity">Quantity</label><br/>
                <input name="quantity" placeholder="Enter the Quantity..." type="number"/>  
                <label htmlFor="payment">Payment Method</label>
               
                <div >
                    <table>
                        <tr>
                            <td>Cash</td>
                            <td style={{"height" : "25%", "width" : "20%"}}><input type="radio" value="Male" name="gender" /> </td>
                            <td>Card</td>
                            <td style={{"height" : "25%", "width" : "20%"}}><input type="radio" value="Female" name="gender" /> </td>
                        </tr>
                    </table>
                    
   </div>
                    <label htmlFor="Food Category">Food Item</label>
                    <label htmlFor="price">Total</label>
  
                <div >
                <label htmlFor="TorD">Select your way</label>
                    <table>
                        <tr>
                            <td>Take Away</td>
                            <td style={{"height" : "20%", "width" : "15%"}}><input type="radio" value="takeaway" name="type" /> </td>
                            <td>Delivery</td>
                            <td style={{"height" : "20%", "width" : "15%"}}><input type="radio" value="Female" name="type" /> </td>
                        </tr>
                    </table>
    
                    <Link to="/menu">
                <button>ORDER</button>
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