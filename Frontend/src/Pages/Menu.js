import React from 'react'
import {Menulist} from '../helpers/Menulist';
import Menuitem from '../components/Menuitem';
import '../Styles/Menu.css';
function Menu() {
    return (
        <div className='menu'>
            <h1 className='menuTitle'>
                Our menu
            </h1>
            <div className='Menulist' onClick=''>
                {Menulist.map((menuitem,key)=>{
                    return <Menuitem 
                    key={key}
                    image={menuitem.image} 
                    name={menuitem.name} 
                    price={menuitem.price} />
                })}

            </div>
            
        </div>
    )
}

export default Menu;
