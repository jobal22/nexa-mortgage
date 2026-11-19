import React from 'react'
import './Footer.css'
import logo from '../img/White NEXA 300dpi.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import equalHousing from '../img/equal-housing-lender.png'

function Footer() {
  return (
    <div className='footer-container-property'>
        <div className='footer-container'>
            <div className='nexa-info-container fc-container'>
                <img src={logo}/>
                <div className='nexa-info-container1 nicHR'>
                    <p className='nic1p'>NEXA Lending</p>
                    <a href='https://nexamortgage.com/' target="_blank" rel="noreferrer">www.NEXALending.com</a>
                </div>
                <div className='nexa-info-container1 nicHR'>
                    <p>NMLS #1660690</p>
                </div>
                <div className='nexa-info-container1 nicHR'>
                    <p>AZ BANKER license: BK-2006218</p>
                </div>
                <div className='nexa-info-container2'>
                    <p>An Equal Housing Lender All Rights Reserved. © 2026</p>
                </div>
            </div>
            <div className='nexa-contact-container fc-container'>
                <p className='nccp'>Contact Us</p>
                <div className='nexa-contact-container-contained'>
                    <div className='nexa-contact-container1 nicHR'>
                        <FontAwesomeIcon icon={faLocationDot} className='customIconFooter'/> 
                        <a href="http://www.google.com/maps/place/5559+S+Sossaman+Rd+Bldg+1,+Ste+101,+Mesa,+AZ+85212/data=!4m2!3m1!1s0x872bad9028c7e269:0x17197114316f4aaa?sa=X&ved=1t:242&ictx=111" target="_blank" rel="noreferrer" className="map-btn">5559 S Sossaman Rd Building 1 #101, Mesa, AZ 85212</a>
                    </div>
                    <div className='nexa-contact-container1 nicHR'>
                        <FontAwesomeIcon icon={faPhone} className='customIconFooter'/>
                        <a href="tel:+13187891188">(318) 789-1188</a>
                    </div>
                    <div className='nexa-contact-container1 nicHR'>
                        <FontAwesomeIcon icon={faEnvelope} className='customIconFooter'/>
                        <a href="mailto:jbaldwin@nexalending.com">jbaldwin@nexalending.com</a>
                    </div>
                </div>
            </div>
            <div className='nexa-contact-container nexaResources fc-container'>
                <p className='nccp'>Resources</p>
                <div className='nexa-contact-container-contained'>
                    {/* <div className='nexa-contact-container1 nicHR nexaResouresLink'>
                        <a href="/loan-programs">Loan Programs</a>
                    </div> */}
                    <div className='nexa-contact-container1 nicHR nexaResouresLink'>
                        <a href="https://nexamortgage.com/privacy-policy/" target="_blank" rel="noreferrer">Privacy Policy</a>
                    </div>
                    <div className='nexa-contact-container1 nicHR nexaResouresLink'>
                        <a href="https://www.nmlsconsumeraccess.org/TuringTestPage.aspx?ReturnUrl=/EntityDetails.aspx/COMPANY/1660690" target="_blank" rel="noreferrer">NMLS Consumer Access</a>
                    </div>
                    <div className='nexa-contact-container1 nexaResouresLink'>
                        <a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/2906269" target="_blank" rel="noreferrer">NMLS 2906269</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer-container-1'>
            <img src={equalHousing} alt="equal housing opportunity"/>
            <p>This is not an offer to enter into an agreement. Not all customers will qualify. Information, rates and programs are subject to change without notice. All products are subject to credit and property approval. Other restrictions and limitations may apply.</p>
            <p>Copyright © 2026 | NEXA Lending</p>
            <p>Licensed In: GA | NMLS #2906269 | NMLS ID 1660690 | AZ BANKER license: BK-2006218</p>
            <p>© Copyright - Jonathan Baldwin - Mortgage Loan Originator</p>
        </div>
    </div>
  )
}

export default Footer