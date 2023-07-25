import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";


function CheckoutProduct({id, image, title, price}){
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
    return (
        <div className="checkout-product">
            <img src={image} alt="" className="checkout-img"/>
            <div className="checkout-info">
                <p className="checkout-product-title">{title}</p>
                <p className="checkout-product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromBasket}>Remove</button>
            </div>
        </div>

    )
}

export default CheckoutProduct