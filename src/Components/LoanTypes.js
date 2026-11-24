import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHouse, faShieldHeart, faAward, faLeaf, faBuilding, faHelmetSafety, faChartSimple, faLocationDot, faHammer, faPiggyBank, faStar, faBuildingWheat} from '@fortawesome/free-solid-svg-icons'

import './LoanTypes.css'

function LoanTypes() {
  return (
    <div className='loanTypes-container'>
        <div className='loanTypes-title-container'>
            <div className='lttc'>
                <p>
                    <span className='lt-first'>As your mortage broker:</span>
                    <span className='lt-second'> I have access to over</span>
                    <span className='lt-third'> 200</span>
                    <span className='lt-fourth'> mortgage lenders</span>
                    <span className='lt-fifth'> and countless programs to fit your unique needs.</span>
                </p>
                {/* <h1>As your mortage broker:</h1>
                <h2>I have access to over <span>200 mortgage lenders</span></h2>
                <p>and countless programs to fit your unique needs.</p> */}
            </div>
        </div>
        <div className='loanTypes-container-main'>
            <h3>Including</h3>
            <hr />
            <div className='loanTypes-example-container'>
                <div className='ltec-mini'>
                    <FontAwesomeIcon icon={faHouse} className='customIconExample'/>
                    <p>Conventional</p>
                </div>
                <div className='ltec-mini'>
                    <FontAwesomeIcon icon={faShieldHeart} className='customIconExample'/>
                    <p>FHA</p>
                </div>
                <div className='ltec-mini'>
                    <FontAwesomeIcon icon={faAward} className='customIconExample'/>
                    <p>VA</p>
                </div>
                <div className='ltec-mini'>
                    <FontAwesomeIcon icon={faLeaf} className='customIconExample'/>
                    <p>USDA</p>
                </div>
                <div className='ltec-mini'>
                    <FontAwesomeIcon icon={faBuilding} className='customIconExample'/>
                    <p>Commercial</p>
                </div>
                <div className='ltec-mini'>
                    <FontAwesomeIcon icon={faHelmetSafety} className='customIconExample'/>
                    <p>Self Employed Aternative Documentation</p>
                </div>
                <div className='ltec-mini'>
                    <FontAwesomeIcon icon={faChartSimple} className='customIconExample'/>
                    <p>DSCRS Investor Loans</p>
                </div>
                <div className='ltec-mini'>
                    <FontAwesomeIcon icon={faBuildingWheat} className='customIconExample'/>
                    <p>Farm and Ranch</p>
                </div>
                <div className='ltec-mini'>
                    <FontAwesomeIcon icon={faLocationDot} className='customIconExample'/>
                    <p>Land</p>
                </div>
                <div className='ltec-mini'>
                    <FontAwesomeIcon icon={faHammer} className='customIconExample'/>
                    <p>Construction</p>
                </div>
                <div className='ltec-mini'>
                    <FontAwesomeIcon icon={faPiggyBank} className='customIconExample'/>
                    <p>0% Down Payment Programs</p>
                </div>
                <div className='ltec-mini'>
                    <FontAwesomeIcon icon={faStar} className='customIconExample'/>
                    <p>HELOCS</p>
                </div>       
            </div>
            <hr />
            <h3>and many others</h3>
        </div>
    </div>
  )
}

export default LoanTypes