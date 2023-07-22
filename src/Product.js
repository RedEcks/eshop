import React from "react";
import './Product.css';
import { useStateValue } from "./StateProvider";


function Product({id, title,price,rating,image}){

    const [state, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
            },
        })
    }


    return(
        <div>
            <div className="product">
                <img src={image} alt="" width="400" height="300"/>
                <div className="product-info">
                    <p>{title}</p>
                    <small>$</small>
                    <strong>{price}</strong>
                    {/* <div className="product-rating">
                        {[...Array(rating)].fill.map((_,i)=>(
                            return(<p>⭐</p>)
                            ))}
                    </div> */}
                    <div>
                        <button onClick={addToBasket}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product