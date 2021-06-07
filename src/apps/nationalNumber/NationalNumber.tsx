import React, { useState } from 'react'

import randomNumber from '@/utilities/random'
import pad from '@/utilities/pad'
import CopyButton from '@/utilities/CopyButton'
import Reload from '../../images/reload.svg'

interface NatProps {
  minAge?: number
  maxAge?: number
  gender?: string
}

/**
 * Get a random birth year
 * @param minAge number
 * @param maxAge number
 * @returns array YYMMDD, true if birth year < 2000
 */

const getRandomBirthDate = (minAge: number, maxAge: number): any[] => {
  // Get random birth date
  const today = new Date()
  const birthYear = today.getFullYear() - randomNumber(minAge, maxAge)
  const birthMonth = randomNumber(1, 12)
  const nrOfDays = new Date(birthYear, birthMonth, 0).getDate()
  const birthDate = randomNumber(1, nrOfDays)

  // Convert dates to string and required length
  const strYear = birthYear.toString()
  const year = strYear.substring(strYear.length - 2)

  const strMonth = birthMonth.toString()
  const month = pad(strMonth, 2, '0')

  const strDate = birthDate.toString()
  const date = pad(strDate, 2, '0')

  // Prepare result
  const fullDate = `${year + month + date}`

  const isYoungster = parseInt(strYear, 10) >= 2000

  const result = [fullDate, isYoungster]

  return result
}

const getCounter = (gender: string): string => {
  let counter = 0

  if (gender.toUpperCase() === 'M') {
    // only 996 because we still want to add a number if not odd
    counter = randomNumber(1, 996)
    counter = counter % 2 === 0 ? counter + 1 : counter
  } else {
    // only 997 because we still want to add a number if not even
    counter = randomNumber(2, 997)
    counter = counter % 2 !== 0 ? counter + 1 : counter
  }

  const result = pad(counter, 3, '0')

  return result
}

const getCheckDigit = (input: string, isYoungster = false): string => {
  // Check if birth date is from >= 2000

  const checkValue = isYoungster ? `2${input}` : input

  const inputNr = parseInt(checkValue, 10)

  const mod = inputNr % 97

  const checkDigit = (97 - mod).toString()

  const result = pad(checkDigit, 2, '0')

  return result
}

const generateNN = (minAge = 18, maxAge = 75, gender = 'M'): string => {
  const birth = getRandomBirthDate(minAge, maxAge)

  const counter = getCounter(gender)

  const checkDigit = getCheckDigit(birth[0] + counter, birth[1])

  return `${birth[0]}${counter}${checkDigit}`
}

/**
 * Get a random national number (BE)
 * Format:
 *  - Birth date: YYMMD
 *  - Counter: 001-998 (even = male, odd = female)
 *  - check digits
 * @returns
 */

export const NationalNumber: React.FC<NatProps> = (props) => {
  const { minAge = 18, maxAge = 75, gender = 'M' } = props

  const [refresh, setRefresh] = useState(false)

  const onSubmit = (e: any) => {
    e.preventDefault()
    setRefresh(!refresh)
  }

  const natNum = generateNN(minAge, maxAge, gender)

  return (
    <div>
      <div>
        <span id={natNum} className="select-all text-mono">
          {natNum}
        </span>
        <CopyButton data={natNum} />
      </div>
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
        Generate another National Number
      </button>
    </div>
  )
}
export default NationalNumber
