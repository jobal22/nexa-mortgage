import React from 'react'
import './LoanPrograms.css'

function LoanPrograms() {
  return (
    <div className="loan-program-header">
      <h1>Loan Programs</h1>
      <div className="lpInfo">
        <p>
          NEXA Mortgage offers programs and pricing you and your clients will
          love. With processing, underwritting, and local appraisers that truly
          know our market. Aggessive Loan programs that you’d be hard pressed to
          find anywhere else at very aggressive rates.
        </p>
      </div>
      <hr></hr>
      <div className="loan-programs-container">
        <div className="loan-programs-list-container">
          <ul>
            <li>
              <h2>Conforming Fixed</h2>
              <p>
                Options for loans with as little as 3% down for qualified
                borrowers.
              </p>
            </li>
            <li>
              <h2>Home Ready &amp; Home Possible</h2>
              <p>
                97% financing with reduced mortgage insurance for qualified
                borrowers.
              </p>
            </li>
            <li>
              <h2>Non-Warrantable Condominium</h2>
              <p>
                Financing for newer condo projects that do not meet conventional
                guidelines.
              </p>
            </li>
            <li>
              <h2>NON-QM Loans</h2>
              <p>
                Rather than using cash for a down payment, apply it towards a
                lower interest rate and shorter loan term.
              </p>
            </li>
            <li>
              <h2>FHA, VA &amp; USDA</h2>
              <p>
                Smaller down payments and expanded qualifying ratios. We can
                lend down to a 500 FICO score on FHA.
              </p>
            </li>
            <li>
              <h2>Jumbo Loans</h2>
              <p>Low rate options for larger loan amounts.</p>
            </li>
            <li>
              <h2>Renovation Programs</h2>
              <p>
                Streamline renovation loans that allow for the purchase and
                rehab for a home.
              </p>
            </li>
            <li>
              <h2>Other Loan Programs</h2>
              <p>
                We have access to more than 100 lenders with new programs that
                may fit your specific loan needs. Give me a call to see what
                options are available!
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default LoanPrograms