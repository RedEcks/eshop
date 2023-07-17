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
                        <Product
                        id="001"
                        title="Chocolate Cornet"
                        price={2.50}
                        rating={5}
                        image="https://recipefairy.com/wp-content/uploads/2022/04/chocolate-cornet-on-a-plate.jpg"
                        />
                        <Product
                        id="002"
                        title="Hot Dog Bun"
                        price={2.00}
                        rating={5}
                        image="https://twoplaidaprons.com/wp-content/uploads/2020/08/sausage-bread-top-view-of-angled-sausage-bread-with-ketchup.jpg"
                        />
                        <Product
                        id="003"
                        title="Macha Mochi Donut"
                        price={5.00}
                        rating={5}
                        image="https://goldbelly.imgix.net//uploads/showcase_media_asset/image/167147/MochiMochiDonut-Green-Tea-Donut.jpg"
                        />
                    </div>
                    <div className="home-row">
                    <Product
                        id="004"
                        title="Twisted Donut"
                        price={4.00}
                        rating={5}
                        image="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2022/12/twisted-donuts.jpg"
                        />
                        <Product
                        id="005"
                        title="Taiyaki (custard)"
                        price={3.00}
                        rating={5}
                        image="https://www.sidechef.com/recipe/24b0904b-61f5-4754-b268-0ae5a4be7a09.jpg?d=1408x1120"
                        />
                        <Product
                        id="006"
                        title="Dango"
                        price={1.50}
                        rating={5}
                        image="https://www.bokksu.com/cdn/shop/articles/dango_japanese_dumpling.jpg?v=1650469727"
                        />
                    </div>
                    <div className="home-row">
                    <Product
                        id="007"
                        title="Egg Tart"
                        price={1.50}
                        rating={5}
                        image="https://img.buzzfeed.com/video-api-prod/assets/18da0a2f7c65489abdaaa1767aba847a/BFV6265_EggTart_FB_Thumbnail.jpg"
                        />
                        <Product
                        id="008"
                        title="Yakgwa"
                        price={3.50}
                        rating={5}
                        image="https://recipes.net/wp-content/uploads/2021/12/korean-honey-cookies-yakgwa-recipe-scaled.jpg"
                        />
                        <Product
                        id="009"
                        title="Moon Cake"
                        price={3.00}
                        rating={5}
                        image="https://redhousespice.com/wp-content/uploads/2020/08/Mooncakes-with-salted-egg-yolks-foodgawker-500x375.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home