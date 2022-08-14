import React from 'react'
import Products from '../../components/products/Products';
import Slider from '../../components/slider/Slider';
import './home.css';

function Home() {
    return (
        <React.Fragment>
            <div className="b-menu-container">
                <div className="b-menu-container-item">
                    <a href="#" className="">
                        <img alt="Top Offers" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" />
                        <div className="t-menu-container-item">
                            Top Offers
                        </div>
                    </a>
                </div>
                <div className="b-menu-container-item">
                    <a href="#" className="">
                        <img alt="Grocery" src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" />
                        <div className="t-menu-container-item">
                            Grocery
                        </div>
                    </a>
                </div>
                <div className="b-menu-container-item">
                    <a href="#" className="">
                        <img alt="Mobiles" src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" />
                        <div className="t-menu-container-item">
                            Mobiles
                        </div>
                    </a>
                </div>
                <div className="b-menu-container-item">
                    <a href="#" className="">
                        <img alt="Fashion" src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" />
                        <div className="t-menu-container-item">
                            Fashion <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </div>
                    </a>
                </div>
                <div className="b-menu-container-item">
                    <a href="#" className="">
                        <img alt="Electronics" src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" />
                        <div className="t-menu-container-item">
                            Electronics <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </div>
                    </a>
                </div>
                <div className="b-menu-container-item">
                    <a href="#" className="">
                        <img alt="Beauty, Toys & More" src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" />
                        <div className="t-menu-container-item">
                            Beauty, Toys & More
                        </div>
                    </a>
                </div>
                <div className="b-menu-container-item">
                    <a href="#" className="">
                        <img alt="Home" src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" />
                        <div className="t-menu-container-item">
                            Home <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </div>
                    </a>
                </div>
                <div className="b-menu-container-item">
                    <a href="#" className="">
                        <img alt="Appliances" src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" />
                        <div className="t-menu-container-item">
                            Appliances <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </div>
                    </a>
                </div>
                <div className="b-menu-container-item">
                    <a href="#" className="">
                        <img alt="Travel" src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" />
                        <div className="t-menu-container-item">
                            Travel
                        </div>
                    </a>
                </div>
            </div>
            <div>
                <Slider />
            </div>
            <div>
                <Products />
            </div>
        </React.Fragment>
    )
}

export default Home;