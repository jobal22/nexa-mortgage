import React from 'react'
import "./HomeScreen.css"
import personal from '../img/personal-crop.png' 
import LoanTypes from './LoanTypes'

function HomeScreen() {
  return (
   <div>
      <div className='homescreen-container'>
        <div  className='hs-desktop-container'>
          <img src={personal} alt="portrait of Jonathan Baldwin" className='homescreen-container-img'/>
          <div className='homescreen-container-info-box'>
              <h1>Jonathan Baldwin</h1>
              <h2>MORTGAGE LOAN ORIGINATOR <br /> NMLS# 2906269</h2>                       
              <a href="tel:+13187891188" className='homescreen-phone'>Call or Text: (318) 789-1188</a>
              <h3>Let's get you started with a faster, easier & cheaper mortgage</h3>
              <a
                className="applyNow"
                href='https://prod.lendingpad.com/nexa/d592931b-514e-4526-952c-ebe9ece1cb81/pos'
                target="_blank"
                rel="noreferrer"
              >
                Apply Now
              </a>
          </div>
        </div>
      </div>
      <LoanTypes className='loanTypes-large'/>
    </div>
  )
}

export default HomeScreen