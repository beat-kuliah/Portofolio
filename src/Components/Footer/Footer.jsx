import React from 'react'
import './Footer.css'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import FB from '@iconscout/react-unicons/icons/uil-facebook'
import Git from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png'

function Footer() {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}}/>
        <div className="f-content">
            <span>fransiskusfernando095@gmail.com</span>
            <div className="f-icons">
                <Insta color='white' size='3rem'/>
                <FB color='white' size='3rem'/>
                <Git color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )
}

export default Footer