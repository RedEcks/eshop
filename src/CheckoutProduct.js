import React from "react";
import "./CheckoutProduct.css";


function CheckoutProduct(){

    return (
        <div className="checkout-product">
            <img src="" alt="" className="checkout-img"/>
            <div className="checkout-info">
                <p className="checkout-product-title">kkk</p>
                <p className="checkout-product-price">
                    <small>$</small>
                    <strong>9</strong>
                </p>
                <button>Remove</button>
            </div>
        </div>

    )
}

export default CheckoutProduct