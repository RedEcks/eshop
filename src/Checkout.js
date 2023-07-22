import React from "react"
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal.js"

function Checkout(){

    return(
        <div className="checkout">
            <div className="checkout-left">
                <div>
                    <h2 className="checkout-title">
                        Your Basket
                    </h2>
                    <CheckoutProduct/>
                </div>
            </div>
            <div className="checkout-right">
                <Subtotal/>
            </div>
            
        </div>
    )
}

export default Checkout