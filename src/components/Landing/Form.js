import React, { Component } from 'react'
import './Form.css'

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

    handleCompanyChange() {

    }

    render() {
        return (
            <div ref='form' className='FormWrapper'>
                <div className='FormHeader'>
                    <img src='/assets/img/SM-LOGO-ISO.png' alt='smlogo' />
                    <h2>Contact Us</h2>
                </div>
                <form className='ContactForm' onSubmit={this.handleSubmit}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type='checkbox' />
                        <span>I'm a real estate agent</span>
                    </div>
                    <div>
                        <input type='text' required placeholder='COMPANY' value={this.state.company} onChange={this.handleCompanyChange}/>
                    </div>
                    <div>
                        <input type='text' required placeholder='FIRST NAME*' value={this.state.firstName}/>
                    </div>
                    <div>
                        <input type='text' required placeholder='LAST NAME*' value={this.state.lastName}/>
                    </div>
                    <div>
                        <input type='text' required placeholder='EMAIL ADDRESS*' />
                    </div>
                    <div>
                        <input type='text' required placeholder='PHONE NUMBER*' />
                    </div>
                    <div className='TextArea'>
                        <textarea required placeholder='MESSAGE*' />
                    </div>
                </form>
                <div className='SplashButton light' onClick={this.handleSubmit}>
                    <span>Contact Us</span>
                </div>
            </div>
        )
    }
}

export default Form