import React from "react";
import './Product.css';


function Product({id, title,price,rating,image}){
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
                        <button>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product