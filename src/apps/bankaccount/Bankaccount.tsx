import React, { useState } from 'react'

import randomNumber from '@/utilities/random'
import CopyButton from '@/utilities/CopyButton'
import bicValues from './bicValues'
import Reload from '../../images/reload.svg'

interface BankAccountProps {
  codes: string[]
  showDetails?: boolean
}

interface AccountWrapperProps {
  country: string
  children: React.ReactNode
  showDetails?: boolean
}

interface AccountDetailsProps {
  country: string
  identifier: string
  bic: string
  institution: string
}

function getBicList(country: any): string[] {
  // Loop through the data and if we have a match, take those.
  // Array source:
  // NL: https://www.betaalvereniging.nl/en/focus/giro-based-and-online-payments/bank-identifier-code-bic-for-sepa-transactions/
  // BE: https://www.nbb.be/nl/betalingen-en-effecten/betalingsstandaarden/bankidentificatiecodes

  const list: string[] = bicValues.reduce((codes: any, currentValue) => {
    if (currentValue.countryCode === country.country.toString().toUpperCase()) {
      codes.push(currentValue)
    }
    return codes
  }, [])

  //  console.log(list[0].values)
  // Convert it to a flat list, since all values are possible candidates
  // return bics.flat()
  return list[0].values
  //  return ['123']
}

function getRandomBic(country: string): string {
  let bic = ''
  const bics: string[] = getBicList(country)

  if (bics.length > 0) {
    const rndm = randomNumber(0, bics.length - 1)
    bic = bics[rndm]
  } else {
    bic = randomNumber(0, 999).toString().padStart(3, '0')
  }

  return bic
}

function getDigits(count: number): number {
  const powerLower = 10 ** (count - 1)
  const powerUpper = 10 ** count
  const digits = randomNumber(powerLower, powerUpper - 1)

  return digits
}

function calculateModulo(bankIdentification: string, digits: number): number {
  // 1. Convert bank identification and digits to number
  const identification: number = parseInt(bankIdentification, 10)

  // 2. Combine number from identification and digits as per specs
  // Convert to string first since we want to concatenate iso cumulate
  const number: number = parseInt(
    identification.toString() + digits.toString(),
    10
  )

  // 3. Calculate modulo
  const modulo: number = number % 97

  // 4. Add result from modulo to number
  const checkSum = modulo === 97 ? '97' : modulo.toString().padStart(2, '0')

  const result: number = parseInt(`${digits}${checkSum}`, 10)

  // 5. Return new digits with modulo at the end
  return result
}

function getLetterValue(letters: string): string {
  let i = 0
  let letterValue = ''

  for (i = 0; i < letters.length; i += 1) {
    // 'A' === 65, but we need it as 10, B=11 and so on
    letterValue += letters.charCodeAt(i) - 55
  }

  return letterValue
}

function calculateCheckSum(
  country: string,
  bankIdentification: string,
  numbers: number
): string {
  const countryValue = getLetterValue(country)
  let identification = ''

  if (country === 'NL') {
    identification = getLetterValue(bankIdentification)
  } else {
    identification = bankIdentification
  }

  const checkCombination = `${identification + numbers + countryValue}00`

  /*
  Piece-wise calculation D mod 97 can be done in many ways. One such way is as follows:
      1. Starting from the leftmost digit of D, construct a number using the first 9 digits and call it N.
      2. Calculate N mod 97.
      3. Construct a new 9-digit N by concatenating above result (step 2) with the next 7 digits of D.
      If there are fewer than 7 digits remaining in D but at least one, then construct a new N, which
      will have less than 9 digits, from the above result (step 2) followed by the remaining digits of D
      4. Repeat steps 2–3 until all the digits of D have been processed
      The result of the final calculation in step 2 will be D mod 97 = N mod 97.
      5. Calculate 98 - final result
  */

  let accString: string = checkCombination
  let checkNr: string
  let modNr: number

  let result: string

  checkNr = accString.substring(0, 9)
  modNr = parseInt(checkNr, 10) % 97

  accString = accString.substring(9, accString.length)

  while (accString.length > 0) {
    checkNr = `${modNr}${accString.substring(0, 7)}`
    modNr = parseInt(checkNr, 10) % 97
    accString = accString.substring(7, accString.length)

    if (accString.length < 7) {
      accString = accString.substring(0, accString.length)
    }
  }

  const checkSum: number = 98 - modNr

  // If checksum <= 9; add a leading 0.
  if (checkSum <= 9) {
    result = `0${checkSum}`
  } else {
    result = `${checkSum}`
  }

  return result
}

const AccountDetails: React.FC<AccountDetailsProps> = ({
  country,
  identifier,
  bic,
  institution,
}) => (
  <details>
    <summary>Details</summary>

    <span>
      <ul className="list-none">
        <li>
          Country:{' '}
          <span id={`${country}code`} className="select-all text-mono">
            {country}
          </span>
          <CopyButton data={`${country}code`} />
        </li>
        <li>
          Bank Identifier: {' '}
          <span id={country + identifier} className="select-all text-mono">
            {identifier}
          </span>
          <CopyButton data={country + identifier} />
        </li>
        <li>
          BIC:{' '}
          <span id={country + bic} className="select-all text-mono">
            {bic}
          </span>
          <CopyButton data={country + bic} />
        </li>
        <li>
          Institution:{' '}
          <span id={country + institution} className="select-all text-mono">
            {institution}
          </span>
          <CopyButton data={country + institution} />
        </li>
      </ul>
    </span>
  </details>
)

const AccountWrapper: React.FC<AccountWrapperProps> = ({
  country,
  children,
  showDetails,
}) => {
  const bicDetails = getRandomBic({ country })
  const bic = bicDetails.identifier
  let digits = 0

  if (country === 'BE') {
    const subDigits = getDigits(7)
    digits = calculateModulo(bic, subDigits)
  } else {
    digits = getDigits(10)
  }

  const checksum = calculateCheckSum(country, bic, digits)

  return (
    <li>
      <span id={country} className="select-all text-mono">
        {country}
        {checksum}
        {bic}
        {digits}
      </span>
      {children}

      {showDetails && (
        <AccountDetails
          country={country || ''}
          identifier={bic || ''}
          bic={bicDetails?.bic || ''}
          institution={bicDetails?.institution || ''}
        />
      )}
    </li>
  )
}

export const BankAccount: React.FC<BankAccountProps> = ({
  codes,
  showDetails = false,
}) => {
  const [refresh, setRefresh] = useState(false)

  const onSubmit = (e: any) => {
    e.preventDefault()
    setRefresh(!refresh)
  }
  return (
    <>
      <ul className="list-none">
        {codes &&
          codes.map((country: string) => (
            <AccountWrapper
              key={country}
              country={country}
              showDetails={showDetails}
            >
              <CopyButton data={country} />
            </AccountWrapper>
          ))}
      </ul>
      <button
        className="button icon__right"
        aria-label="Refresh"
        title="Refresh"
        onClick={onSubmit}
        type="button"
      >
        <span className="icon">
          <Reload />
        </span>
        Generate another set
      </button>
    </>
  )
}
export default BankAccount
