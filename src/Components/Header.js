import React from 'react'
import logo from '../img/White NEXA 300dpi.png'
import Menu from './Menu/Menu'
import PROFILE from '../.profile.js'
import './Header.css'

function Header() {
    const { profile } = PROFILE;
  return (
    <div className='navContainer'>
        <a href="/"><img src={logo} alt="door logo" /></a>
        <nav className="nonmobile-navbar">
            <ul>
                <li><a href="/loan-programs">Loan Programs</a></li>
                <li><a href="https://nexamortgage.com/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a></li>
                {profile.map((p) => (
                <li><a href="/coding" className='applyNowNav' href={p.loanLink} key={p.id} target="_blank" rel="noreferrer">Apply Now</a></li>
                ))}
            </ul>
        </nav>
        <div className='menu'>
            <Menu />
        </div>
</div>
  )
}

export default Header