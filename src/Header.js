import React from "react";
import "./Header.css"

function Header(){

    return (
        <div className="header">
            <div className='header_logo'>
                <img src="https://media.istockphoto.com/id/1189778189/vector/grandma-or-granny-mascot-character-cartoon-design-vector-format.jpg?s=612x612&w=0&k=20&c=tsQ6g2tZ325WP26Qyx_XberGvr3qpADeUTJJPPmCydM=" className='header_logo' alt="" />
                <h3 className='header-title'>Grandma's Bakery</h3>
            </div>
            <div className='header_search'>
                <input type='text' className='header-search'/>
                <img src="https://cdn-icons-png.flaticon.com/512/954/954591.png" className='header-search-icon' alt=''/>
            </div>
            <div className='header_nav'>
                <div className='nav_item'>
                    <span className='nav_itemLineOne'>Hello Guest</span>
                    <span className='nav_itemLineTwo'>Sign In</span>
                </div>
                <div className='nav_item'>
                    <span className='nav_itemLineOne'>Your</span>
                    <span className='nav_itemLineTwo'>Shop</span>
                </div>
                <div className='nav_item'>
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" className='shopping-cart-logo' alt="" />
                    <span className='nav_itemLineTwo'>0</span>
                </div>
            </div>
        </div>
    )


}

export default Header