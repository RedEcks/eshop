import React from "react";
import "./CheckoutProduct.css";


function CheckoutProduct({id, image, title, price}){

    return (
        <div className="checkout-product">
            <img src={image} alt="" className="checkout-img"/>
            <div className="checkout-info">
                <p className="checkout-product-title">{title}</p>
                <p className="checkout-product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <button>Remove</button>
            </div>
        </div>

    )
}

export default CheckoutProduct