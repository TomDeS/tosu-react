import React from 'react'

import getBicCode from '@/utilities/bankaccount/get-bic-code'
import getAccountDigits from '@/utilities/bankaccount/get-account-digits'

const Bankaccount = () => {
  return (
    <>
      <div className="card">
        <button className="btn btn-outline-primary">
          Generate another set
        </button>
        <button className="btn btn-outline-primary">
          Generate Belgian account
        </button>
        <button className="btn btn-outline-primary">
          Generate Dutch account
        </button>
        <ul>
          <li>
            Random valid bank account:
            <GetBankAccount countryCode="NL" />
          </li>
        </ul>
      </div>
    </>
  )
}

const GetBankAccount = ({ countryCode = 'NL' }: { countryCode: string }) => {
  return (
    <div>
      Bank accounts:
      <div>
        {getBicCode(countryCode)}
        {getAccountDigits(countryCode, getBicCode(countryCode))}
      </div>
    </div>
  )
}

export default Bankaccount
