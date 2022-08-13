import React from 'react'
import logo from '../../assets/images/flipkart-plus_8d85f4.png';
import plusLogo from '../../assets/images/plus_aef861.png';

function Header() {
  return (
    <React.Fragment>
      <header>
        <nav className="nav-bar-navbar">
          <div className='nav-bar-navbar-items'>
          </div>
          <div className='nav-bar-navbar-items'>
            <div className='menu-container'>
              <div className="menu-items">
                <div className="logo">
                  <img src={logo} alt="logo" />
                </div>
                <div className="small-logo">
                  <a href="https://github.com/facebook">Explore<span>Plus</span><img src={plusLogo} alt="logo" /></a>
                </div>
              </div>
              <div className="menu-items">
                <div className="search">
                  <input type="text" placeholder="Search for products, brands and more" />
                </div>
              </div>
              <div className="menu-items">
                <div className="login-button">
                  <button type="button" className="">Login</button>
                </div>
              </div>
              <div className="menu-items">
                <div className="become-seller">
                  <a href="https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect">
                    Become a Seller
                  </a>
                </div>
              </div>
              <div className="menu-items">
                <div className="become-seller" id="more-menu">
                  <div className="become-seller-div">
                    <i className="fa fa-angle-down" aria-hidden="true"></i> More
                    <div className="more-menu-main">
                      <div className="more-menu-arrow-button">
                      </div>
                      <div className="more-menu-main-1">
                        <div className="more-menu-main-2">
                          <ul>
                            <li>
                              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" className="" viewBox="0 0 12 14"><g fill="none" fillRule="evenodd"><path d="M-4-3h20v20H-4z"></path><path fill="#2874F1" d="M6.17 13.61c-1.183 0-1.922-.723-1.922-1.88H8.09c0 1.157-.74 1.88-1.92 1.88zm4.222-5.028l1.465 1.104v1.07H0v-1.07l1.464-1.104v-2.31h.004c.035-2.54 1.33-4.248 3.447-4.652V.992C4.915.446 5.37 0 5.928 0c.558 0 1.014.446 1.014.992v.628c2.118.404 3.412 2.112 3.446 4.65h.004v2.312z"></path></g></svg><span className='more-menu-a-div'>Notification Preferences</span></a>
                            </li>
                            <li>
                              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="" viewBox="0 0 14 17"><g fill="none" fillRule="evenodd"><path fill="#2874F0" fillRule="nonzero" d="M12.25.542H1.75c-.833 0-1.5.675-1.5 1.5v10.5c0 .825.667 1.5 1.5 1.5h3L7 16.292l2.25-2.25h3c.825 0 1.5-.675 1.5-1.5v-10.5c0-.825-.675-1.5-1.5-1.5zm-4.5 12h-1.5v-1.5h1.5v1.5zM9.303 6.73l-.676.69c-.54.547-.877.997-.877 2.122h-1.5v-.375c0-.825.338-1.575.877-2.123l.93-.945c.278-.27.443-.646.443-1.058 0-.825-.675-1.5-1.5-1.5s-1.5.675-1.5 1.5H4c0-1.658 1.342-3 3-3s3 1.342 3 3c0 .66-.27 1.26-.697 1.687z"></path></g></svg><span className='more-menu-a-div'>24x7 Customer Care</span></a>
                            </li>
                            <li><a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" className="" viewBox="0 0 18 10"><g fill="none" fillRule="evenodd"><path fill="#2874F0" fillRule="nonzero" d="M12.333 0l1.91 1.908-4.068 4.067-3.333-3.333L.667 8.825 1.842 10l5-5 3.333 3.333 5.25-5.24L17.333 5V0"></path></g></svg><span className='more-menu-a-div'>Advertise</span></a>
                            </li>
                            <li>
                              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" className="" viewBox="0 0 12 14"><g fill="none" fillRule="evenodd"><path d="M-4-3h20v20H-4z"></path><path fill="#2874F0" fillRule="nonzero" d="M12 4.94H8.57V0H3.43v4.94H0l6 5.766 6-5.765zM0 12.354V14h12v-1.647H0z"></path></g></svg><span className='more-menu-a-div'>Download App</span></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="menu-items">
                <div className="become-seller">
                  <a href="https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART">
                    <svg className="V3C5bO" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path className="_1bS9ic" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg> Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='nav-bar-navbar-items'>

          </div>
        </nav>
      </header>
    </React.Fragment>
  )
}

export default Header;