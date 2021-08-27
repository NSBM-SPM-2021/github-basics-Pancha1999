import React from 'react'
import { Link } from "react-router-dom";

function Menuitem({image,name,price,}) {
    return (
        <div className='menuItem'>
            <Link to={'/foodorder/'+price} >
        <div style={{ backgroundImage: `url(${image})` }}></div>
            
         </Link>
          <h1>{name}</h1>
          <p>Rs{price}</p> 
            
        </div>
    )
}

export default Menuitem
