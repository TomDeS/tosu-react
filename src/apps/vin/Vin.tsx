import React, { useState } from 'react'

import randomNumber from '@/utilities/random'

import CopyButton from '@/utilities/CopyButton'
import Reload from '../../images/reload.svg'

const generateRandomVin = (): string => {
  const vinLength = 17
  const positionWeights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2]
  const characterValues: any[][] = [
    ['A', 1],
    ['B', 2],
    ['C', 3],
    ['D', 4],
    ['E', 5],
    ['F', 6],
    ['G', 7],
    ['H', 8],
    ['J', 1],
    ['K', 2],
    ['L', 3],
    ['M', 4],
    ['N', 5],
    ['P', 7],
    ['R', 9],
    ['S', 2],
    ['T', 3],
    ['U', 4],
    ['V', 5],
    ['W', 6],
    ['X', 7],
    ['Y', 8],
    ['Z', 9],
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
    [6, 6],
    [7, 7],
    [8, 8],
    [9, 9],
  ]

  const maxRndm = characterValues.length - 1

  let vinSum = 0

  const result: string[] | number[] = []

  for (let i = 0; i < vinLength; i += 1) {
    const rndm = randomNumber(0, maxRndm, true)
    const chosenCharacter = characterValues[rndm][0]
    const characterValue: number = characterValues[rndm][1]
    const positionWeight = positionWeights[i]

    result[i] = chosenCharacter

    vinSum += characterValue * positionWeight
  }

  // Check the MOD, if 10, checkdigit is 'X'
  const remainder = vinSum % 11

  if (remainder === 10) {
    result[8] = 'X'
  } else {
    result[8] = remainder
  }

  return result.join('')
}

export const Vin: React.FC = () => {
  const [refresh, setRefresh] = useState(false)

  const onSubmit = (e: any) => {
    e.preventDefault()
    setRefresh(!refresh)
  }

  const vin = generateRandomVin()

  return (
    <div>
      <div>
        VIN:{' '}
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
