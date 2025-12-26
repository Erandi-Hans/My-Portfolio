import React from 'react'
import './Footer.css/'
import logo from '../../assets/mylogo.png'
import theme_pattern from '../../assets/theme_pattern.svg'
import user_icon from '../../assets/user_icon.svg'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                      <img className='logo' src={logo} alt="" />
                      <img  className="theme" src={theme_pattern} alt="" />
                              <p>I am Undergraduate at the University of Vavuniya and also Fullstack developer.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
      <hr />
      <div className="footer-botom">
        <p className="footer-bottom-left"> © 2026 Erandi Hansika. All rights</p>
        <div className="footer-bottom-right">
            <p>Term of services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
