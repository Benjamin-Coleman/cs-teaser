import React, { Component } from 'react'
import './Landing.css'
import { TimelineMax, Power2 } from 'gsap'

import Footer from './Footer'
import SplashLogo from './SplashLogo'

class Landing extends Component {

    componentWillMount() {
        this.tl = new TimelineMax()
    }

    componentDidMount() {
        this.enterAnimation
    }
    
    render() {
        return (
            <div className='LandingWrapper'>
                <div className='VideoWrapper'>
                    <video src="/assets/videos/landing.mp4" loop="loop" autoPlay="autoPlay" poster="#">
                    </video>
                </div>
                <div className='ContentWrapper'>
                    <SplashLogo />
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Landing