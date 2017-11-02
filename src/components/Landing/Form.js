import React, { Component } from 'react'
import './Form.css'
import { TweenMax, Power2 } from 'gsap'

class Form extends Component {

    state = {
        agent: false,
        company: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    handleSubmit = e => {
        window.scrollTo(0, 0)
        this.props.toggleFormOff()
        TweenMax.to(this.refs.confirmation, 0.4, {autoAlpha: 1, delay: 0.4, ease: Power2.easeOut})

        // Mock submit form DB call

        // const url = '/api/v1/contact'
        // const options = {
        //     headers: { "Content-Type": "application/json", "Accept": "application/json"},
        //     method: { "POST"},
        //     body: JSON.stringify(this.state)
        // }
        // fetch(url, options)
        //     .then(res => res.json())
        //     .then(json => console.log('This response would really determine the message we send to the user. Current implementation assumes success')
    }

    handleAgentChange = e => {
        this.setState({ agent: e.target.checked})
    }

    handleCompanyChange = e => {
        this.setState({ company: e.target.value })
    }

    handleFirstNameChange = e => {
        this.setState({ firstName: e.target.value })
    }

    handleLastNameChange = e => {
        this.setState({ lastName: e.target.value })
    }

    handleEmailChange = e => {
        this.setState({ email: e.target.value })
    }

    handlePhoneChange = e => {
        this.setState({ phone: e.target.value })
    }

    handleMessageChange = e => {
        this.setState({ message: e.target.value })
    }

    render() {
        return (
            <div>
                <div ref='form' className={`FormWrapper ${this.props.className}`}>
                    <div className='FormHeader'>
                        <img src='/assets/img/SM-LOGO-ISO.png' alt='smlogo' />
                        <h2>Contact Us</h2>
                    </div>
                    <form className='ContactForm' onSubmit={this.handleSubmit}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input name='agent' type='checkbox' checked={this.state.agent} onChange={this.handleAgentChange}/>
                            <span><label htmlFor='agent'>I'm a real estate agent</label></span>
                        </div>
                        <div>
                            <input type='text' required placeholder='COMPANY' value={this.state.company} onChange={this.handleCompanyChange}/>
                        </div>
                        <div>
                            <input type='text' required placeholder='FIRST NAME*' value={this.state.firstName} onChange={this.handleFirstNameChange}/>
                        </div>
                        <div>
                            <input type='text' required placeholder='LAST NAME*' value={this.state.lastName} onChange={this.handleLastNameChange}/>
                        </div>
                        <div>
                            <input type='text' required placeholder='EMAIL ADDRESS*' value={this.state.email} onChange={this.handleEmailChange} />
                        </div>
                        <div>
                            <input type='text' required placeholder='PHONE NUMBER*' value={this.state.phone} onChange={this.handlePhoneChange} />
                        </div>
                        <div className='TextArea'>
                            <textarea required placeholder='MESSAGE*' value={this.state.message} onChange={this.handleMessageChange}/>
                        </div>
                    </form>
                    <div className='SplashButton light' onClick={this.handleSubmit}>
                        <span>Contact Us</span>
                    </div>
                </div>
                <div ref='confirmation' className='ConfirmationWrapper'>
                    <div className='ConfirmationContent'>
                        <h2>Thank You</h2>
                        <p>We'll get back to you shortly</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form