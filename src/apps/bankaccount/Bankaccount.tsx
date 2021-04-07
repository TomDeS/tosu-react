import React, { useState } from 'react'

import randomNumber from '@/utilities/random'
import CopyButton from '@/utilities/CopyButton'
import { bicValues } from './bicValues'

interface BankAccountProps {
  codes: string[]
}

interface AccountWrapperProps {
  country: string
  children: React.ReactNode
}

function getBicList(country: any): string[] {
  // Loop through the data and if we have a match, take those.
  // Array source: https://www.betaalvereniging.nl/en/focus/giro-based-and-online-payments/bank-identifier-code-bic-for-sepa-transactions/

  const bics: string[] = bicValues.reduce((codes: any, currentValue) => {
    if (currentValue.countryCode === country.country.toString().toUpperCase()) {
      codes.push(currentValue.BIC)
    }
    return codes
  }, [])

  // Convert it to a flat list, since all values are possible candidates
  return bics.flat()
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

const AccountWrapper: React.FC<AccountWrapperProps> = ({
  country,
  children,
}) => {
  const bic = getRandomBic({ country })
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
    </li>
  )
}

export const BankAccount: React.FC<BankAccountProps> = ({ codes }) => {
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
            <AccountWrapper key={country} country={country}>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            viewBox="0 0 24 24"
            fill="black"
            width="48px"
            height="48px"
          >
            <g>
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
            <g>
              <g>
                <path d="M12,5V2L8,6l4,4V7c3.31,0,6,2.69,6,6c0,2.97-2.17,5.43-5,5.91v2.02c3.95-0.49,7-3.85,7-7.93C20,8.58,16.42,5,12,5z" />
                <path d="M6,13c0-1.65,0.67-3.15,1.76-4.24L6.34,7.34C4.9,8.79,4,10.79,4,13c0,4.08,3.05,7.44,7,7.93v-2.02 C8.17,18.43,6,15.97,6,13z" />
              </g>
            </g>
          </svg>
        </span>
        Generate another set
      </button>
    </>
  )
}
export default BankAccount
