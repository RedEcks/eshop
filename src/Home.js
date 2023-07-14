import React from "react"
import './Home.css'
import Product from "./Product"


function Home(){

    return(
        <div>
            <div className="home">
                <div className="home-container">
                    <img src="https://img.freepik.com/free-photo/frame-food-ingredients-baking-gently-pink-pastel-background-cooking-flat-lay-with-copy-space-top-view-baking-concept-flat-lay_127032-2200.jpg" alt="" className="home-image" width="1519" height="1000"/>
                    <div className="home-row">
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                    <div className="home-row">
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                    <div className="home-row">
                        <Product/>
                        <Product/>
                        <Product/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home