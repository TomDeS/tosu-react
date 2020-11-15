import GenerateRandomNumber from '@/utilities/generate-random-number'
import { bicValues } from './BicValues'

const getBicCode = ({ countryCode = 'NL' }: {countryCode: string}) => {
  let bic: string = ''

  // Loop through the data and if we have a match, take those.
  // Array source: https://www.betaalvereniging.nl/en/focus/giro-based-and-online-payments/bank-identifier-code-bic-for-sepa-transactions/
  const allBics: string[] = bicValues.reduce(function (codes:string[], currentValue) {
    if (currentValue['countryCode'] === countryCode) {
      codes.push(currentValue['BIC'])
    }
    return codes
  }, [])

  // Convert it to a flatten list, since all values are possible candidates
  const bicList = allBics.flat()

  // If the allBics is empty, generate a number based BIC (for example, BE uses numbers and we don not have the data stored locally)
  if (!allBics.length) {
    const bicValue = GenerateRandomNumber(0, 999)
    bic = bicValue.toString()

    // Format should be NNN
    if (bic.length == 2) {
      bic = '0' + bic
    } else if (bic.length == 1) {
      bic = '00' + bic
    }
  } else {
    // Choose a random BIC from our data set
    bic = bicList[GenerateRandomNumber(0, bicList.length - 1)]
  }

  return bic
}

export default getBicCode
