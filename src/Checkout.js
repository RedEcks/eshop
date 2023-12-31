import React from "react"
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal.js"
import { useStateValue } from "./StateProvider"

function Checkout(){
    const [{basket}, dispatch] = useStateValue()
    return(
        <div className="checkout">
            <div className="checkout-left">
                <div>
                    <h2 className="checkout-title">
                        Your Basket
                    </h2>
                    {basket.map(item=>(
                        <CheckoutProduct 
                        id= {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        />
                    )) }
                </div>
            </div>
            <div className="checkout-right">
                <Subtotal/>
            </div>
            
        </div>
    )
}

export default Checkout