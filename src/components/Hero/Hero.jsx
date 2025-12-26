import React from 'react'
import './Hero.css'
import profile_img from '../../assets/mypink.png'


const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>I'm Erandi Hansika,</span><br />Full-stack developer based in Sri Lanka.</h1>
        <p>Undergraduate at the University of Vavuniya.  I enjoy building end-to-end digital solutions.  I am always ready to take on new challenges in the tech world.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero
