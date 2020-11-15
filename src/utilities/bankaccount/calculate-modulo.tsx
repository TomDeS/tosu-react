const calculateModulo = ({
  bankIdentification,
  digits,
  nrOfDigits,
}: {
  bankIdentification: string[]
  digits: number
  nrOfDigits: number
}) => {
  // 1. Convert bank identification and digits to number
  const identification: number = parseInt(bankIdentification[0], 10)

  // 2. Make one number from identifciation and digits
  let number: number = identification * Math.pow(10, nrOfDigits) + digits

  // 3. Calculate modulo
  let modulo: number = number % 97

  // 4. Append modulo to number
  let modDigit1: string = '0'
  let modDigit2: string = '0'

  if (modulo === 0) {
    // If modulo === 0 then, take 97 as check sum
    modDigit1 = '9'
    modDigit2 = '7'
  } else if (modulo <= 9) {
    // If modulo <= 9, first digit is 0
    modDigit1 = '0'
    modDigit2 = ('' + modulo)[0]
  } else {
    modDigit1 = ('' + modulo)[0]
    modDigit2 = ('' + modulo)[1]
  }

  number = parseInt('' + digits + modDigit1 + modDigit2, 10)

  // 5. Return new digits with modulo at the end
  return number
}

export default calculateModulo
