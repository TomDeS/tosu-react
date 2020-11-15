import GenerateRandomNumber from '@/utilities/generate-random-number'
import calculateModulo from './calculate-modulo'
import { perform11test } from './perform-11test'

const getAccountDigits = ({
  countryCode = 'NL',
  bic,
}: {
  countryCode: string
  bic: string
}) => {
  let digits: number = 0

  // Get digits
  switch (countryCode) {
    case 'NL':
      digits = generateDutchDigits()
      break
    case 'BE':
      digits = generateBelgianDigits(bic)
      break
    default:
      break
  }

  return digits
}

function generateDutchDigits() {
  /*
      Format: 2L 2N 4L 10N
      Example: NL 64 FLOR 6627 0021 83
      @2L: country code, fixed (NL)
      @2N: check sum, calculated based on 2L4L10N00
      @4L: Bank identification, 4 letters
      @10N: 10 random base 10 digits, should pass eleven test for Dutch bank accounts
  */
  const digitsLength = 10
  const elevenTest = true

  // Get digits, but they should pass the eleven test
  return getNumbers(digitsLength, elevenTest)
}

function generateBelgianDigits(bankIdentification: string[]): number {
  /**
    Format: 2L 2N 3N 7N 2N
    Example: BE 68 539 0075 470 34
    @2L: country code, fixed (BE)
    @2N: check sum, calculated based on 2L4
    @3N: bank identification
    @7N: 7 random base 10 digits
    @2N: check sum for 7 previous digits, remainder of modulo 97 (if 0, checksum is 97)
  */

  const digitsLength = 7
  const elevenTest = false

  // Get digits, no need to pass the eleven test
  const numbers = getNumbers(digitsLength, elevenTest)

  // calculate mod 97 of the sub check and add to numbers
  return calculateModulo(bankIdentification, numbers, digitsLength)
}

function getNumbers(count: number, elevenTest: boolean): number {
  let i: number = 0
  let j: number = 0
  let k: number = 0
  let p1: number = 0
  let p2: number = 0
  let digits: number[] = []
  let pass11: boolean = false
  const highestDigit: number = 9

  // get {count} random base 10 numbers
  for (i = 0; i < count; i++) {
    if (i === 0) {
      digits[i] = GenerateRandomNumber(1, highestDigit) // first digit may not be zero
    } else {
      digits[i] = GenerateRandomNumber(0, highestDigit)
    }
  }

  // If 11-test is applicable, verify generated numbers
  if (elevenTest) {
    // check if they pass the 11-test
    pass11 = perform11test(digits)

    // 11-test failed
    if (!pass11) {
      // take two random digits
      p1 = GenerateRandomNumber(0, highestDigit)
      p2 = GenerateRandomNumber(0, highestDigit)

      // make sure we didn't select twice the same digit
      while (p1 === p2) {
        p2 = GenerateRandomNumber(0, highestDigit)
      }

      for (j = 0; j < count && pass11 === false; j++) {
        digits[p1] = j
        for (k = 0; k < count && pass11 === false; k++) {
          digits[p2] = k
          pass11 = perform11test(digits)
        }
      }

      // Re-evaluate pass11
      if (!pass11) {
        // We went through all options without success. Start over.
        getNumbers(count, elevenTest)
      }
    }
  }

  return parseInt(digits.join(''), 10)
}
export default getAccountDigits
