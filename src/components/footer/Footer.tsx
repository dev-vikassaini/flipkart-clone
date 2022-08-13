import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <React.Fragment>
            <footer className='flex-all-center'>
                <div className='main-footer-container'>
                    <div className='main-footer-container-item'>

                    </div>
                    <div className='main-footer-container-item'>

                    </div>
                    <div className='main-footer-container-item'>
                        <div className="q-footer-items">
                            <div className="q-footer-items-menu">
                                <a href="https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect">
                                    <i className="fa fa-square fontColor" aria-hidden="true"></i> Become a Seller
                                </a>
                            </div>
                        </div>
                        <div className="q-footer-items">
                            <div className="q-footer-items-menu">
                                <a href="https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect">
                                    <i className="fa fa-square fontColor" aria-hidden="true"></i> Advertise
                                </a>
                            </div>
                        </div>
                        <div className="q-footer-items">
                            <div className="q-footer-items-menu">
                                <a href="https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect">
                                    <i className="fa fa-square fontColor" aria-hidden="true"></i> Gift Cards
                                </a>
                            </div>
                        </div>
                        <div className="q-footer-items">
                            <div className="q-footer-items-menu">
                                <a href="https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect">
                                    <i className="fa fa-square fontColor" aria-hidden="true"></i> Help Center
                                </a>
                            </div>
                        </div>
                        <div className="q-footer-items">
                            <div className="q-footer-items-menu">
                                <a href="https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect">
                                    © 2007-2022 Flipkart-clone.com
                                </a>
                            </div>
                        </div>
                        <div className="q-footer-items">
                            <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg' alt='Payment Method information' />
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default Footer;