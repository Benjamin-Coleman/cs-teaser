import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <div className='Footer'>
                <div className='LogoWrapper'>
                    <img src='/assets/img/ISG-LOGO.png' alt='isg-logo'/>
                    <img src='/assets/img/ELAD-LOGO.png' alt='elad-logo'/>
                </div>
                <div className='Disclaimer'>
                    <p>
                        ORAL REPRESENTATIONS CANNOT BE RELIED UPON AS CORRECTLY STATING REPRESENTATIONS OF THE DEVELOPER. FOR CORRECT REPRESENTATIONS, MAKE REFERENCE 
TO THIS BROCHURE AND TO THE DOCUMENTS REQUIRED BY SECTION 718.503, FLORIDA STATUTES, TO BE FURNISHED BY A DEVELOPER TO A BUYER OR LESSEE.
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer