import React, { Component } from 'react'
import './Landing.css'
import { TimelineMax, TweenMax, Power2 } from 'gsap'
import { Transition } from 'react-transition-group'

import Form from './Form'

class Landing extends Component {

    state = {
        formOpen: false,
    }

    componentWillMount() {
        this.tl = new TimelineMax()
    }

    componentDidMount() {
        this.enterAnimation()
    }

    enterAnimation = () => {
        this.tl
            .set(this.refs.footer, {autoAlpha: 0})
            .set(this.refs.logo, {autoAlpha: 0})
            .set(this.refs.intro, {autoAlpha: 0})
            .to(this.refs.footer, 0.3, {autoAlpha: 1, ease: Power2.easeIn}, 0.75)
            .to(this.refs.logo, 0.4, {autoAlpha: 1, ease: Power2.easeIn}, '+=0.75')
            .to(this.refs.logo, 0.4, {autoAlpha: 0, ease: Power2.easeOut}, '+=1.5')
            .to(this.refs.intro, 0.4, {autoAlpha: 1, ease: Power2.easeOut})
    }

    handleContactUsClick = () => {
        window.scrollTo(0, 0)
        TweenMax.to(this.refs.intro, 0.4, {autoAlpha: 0, ease: Power2.easeOut})
        // Animating the form in could of course be done the same way
        // but going with React Transition for variety
        this.setState({ formOpen: true })
    }

    toggleFormOff = () => {
        this.setState({ formOpen: false })
    }

    handleSubmit = () => {
        console.log('Form submitted')
    }
    
    render() {
        //Form animation duration
        const duration = 300;

        return (
            <div className='LandingWrapper'>
                <div className='VideoWrapper'>
                    <video src="/assets/videos/landing.mp4" playsInline loop="loop" autoPlay="autoPlay" poster="/assets/img/poster.jpg">
                    </video>
                </div>
                <div className='ContentWrapper'>
                    <div ref='logo' className='SplashLogoWrapper'>
                        <img src='/assets/img/SM-LOGO.svg' alt='sanmichelelogo'/>
                    </div>
                    <div ref='intro' className='Intro'>
                        <img src='/assets/img/SM-LOGO.svg' alt='sanmichelelogo'/>
                        <div className='IntroText'>
                            <p>
                                Welcome to San Michele Collection. Located in the heart of Weston,<br className='linebreak' /> this inspired neighborhood offers residents a luxury home with the country club-lifestyle to match it.<br className='linebreak' /> Reimagined residences feature kitchens, bathrooms and rooms elegantly finished with the finest materials. Curated community spaces and amenities, including the Collection Members Club,<br className='linebreak' /> offer an unparalleled residential experience.
                            </p>
                            <div className='SplashButton light' onClick={this.handleContactUsClick}>
                                <span>Contact Us</span>
                            </div>
                        </div>
                    </div>
                        <Transition in={this.state.formOpen} timeout={duration} mountOnEnter={true}>
                            {(status) => (
                                <Form className={`fade fade-${status}`} toggleFormOff={this.toggleFormOff}/>
                            )}
                        </Transition>
                    <div ref='footer' className='Footer'>
                        <div className='LogoWrapper'>
                            <img src='/assets/img/ISG-LOGO.png' alt='isg-logo'/>
                            <img src='/assets/img/ELAD-LOGO.png' alt='elad-logo'/>
                        </div>
                        <div className='Disclaimer'>
                            <img src='/assets/img/EQUAL-HOUSING-LOGO.svg' alt='eohlogo'/>
                            <p>
                            ORAL REPRESENTATIONS CANNOT BE RELIED UPON AS CORRECTLY STATING REPRESENTATIONS OF THE DEVELOPER. FOR CORRECT REPRESENTATIONS, MAKE REFERENCE 
                            TO THIS BROCHURE AND TO THE DOCUMENTS REQUIRED BY SECTION 718.503, FLORIDA STATUTES, TO BE FURNISHED BY A DEVELOPER TO A BUYER OR LESSEE.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing