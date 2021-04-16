import React, { useState } from 'react'

import randomNumber from '@/utilities/random'
import pad from '@/utilities/pad'
import CopyButton from '@/utilities/CopyButton'
import Reload from '../../images/reload.svg'

function randomLetters(count: number): string {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const max = alphabet.length - 1
  let result = ''

  for (let i = 0; i < count; i += 1) {
    const rndm = randomNumber(0, max, true)
    result += alphabet[rndm]
  }

  return result
}

function curDate(): string {
  const currentDate = new Date()

  const year = currentDate.getFullYear()

  const month = pad(currentDate.getMonth(), 2, '0')

  const day = pad(currentDate.getDate(), 2, '0')

  const today = `${year}${month}${day}`

  return today
}

function curTime(): string {
  const currentDate = new Date()

  const hour = pad(currentDate.getHours(), 2, '0')

  const minutes = pad(currentDate.getMinutes(), 2, '0')

  const seconds = pad(currentDate.getSeconds(), 2, '0')

  const today = `${hour}${minutes}${seconds}`

  return today
}

const VinValues: React.FC = (props) => {
  const { description, vin } = props

  return (
    <li>
      {description}
      {': '}
      <span id={vin} className="select-all text-mono">
        {vin}
      </span>
      <CopyButton data={vin} />
    </li>
  )
}

export const Vin: React.FC = () => {
  const [refresh, setRefresh] = useState(false)

  const onSubmit = (e: any) => {
    e.preventDefault()
    setRefresh(!refresh)
  }
  const date = curDate()
  const time = curTime()
  const letters = randomLetters(3)

  const vin = letters + date + time

  return (
    <div>
      <div>
        Time based:{' '}
        <span id={vin} className="select-all text-mono">
          {vin}
        </span>
        <CopyButton data={vin} />
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
        Generate another VIN
      </button>
    </div>
  )
}
export default Vin
