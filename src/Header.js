import React from "react";
import "./Header.css"

function Header(){

    return (
        <div className="header">
            <div className='header-logo'>
                <img src="https://media.istockphoto.com/id/1189778189/vector/grandma-or-granny-mascot-character-cartoon-design-vector-format.jpg?s=612x612&w=0&k=20&c=tsQ6g2tZ325WP26Qyx_XberGvr3qpADeUTJJPPmCydM=" className='header-logo' width="200" height="200" alt="" />
                <h3 className='header-title'>Grandma's Bakery</h3>
            </div>
            <div className='header-search'>
                <input type='text' className='search'/>
                <img src="https://cdn-icons-png.flaticon.com/512/954/954591.png" className='header-search-icon' width="20" height="20" alt=''/>
            </div>
            <div className='header-nav'>
                <div className='nav_item'>
                    <span className='guest-greeting'>Hello Guest</span>
                    <span className='sign-in'>Sign In</span>
                </div>
                <div className='nav-item'>
                    <span className='shopping-cart'>Your Cart</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" className='shopping-cart-logo' width="30" height="30" alt="" />
                    <span className='nav-itemNumber'>0</span>
                </div>
            </div>
        </div>
    )


}

export default Header