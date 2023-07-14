import React from "react";
import './Product.css';


function Product(){

    return(
        <div>
            <div className="product">
                <img src="https://recipefairy.com/wp-content/uploads/2022/04/chocolate-cornet-on-a-plate.jpg" alt="" width="400" height="300"/>
                <div className="product-info">
                    <p>Title</p>
                    <p className="product-price">$30</p>
                    <div className="product-rating">⭐</div>
                    <button>Add</button>
                </div>
            </div>
        </div>
    )
}

export default Product