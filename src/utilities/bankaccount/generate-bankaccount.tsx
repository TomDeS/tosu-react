import GenerateRandomNumber from '@/utilities/generate-random-number'
import bicValues  from '@/utilities/bankaccount/bicValues'


const GenerateBankaccount = ({ countryCode = 'NL' }) => {
  let digits: number = 0

  // Get random bank identification code
  const bankIdentification: string = getRandomBankIdentification(countryCode)
  /*
  // Get digits
  switch (countryCode) {
    case 'NL':
      digits = this.generateDutchDigits();
      break;
    case 'BE':
      digits = this.generateBelgianDigits(bankIdentification);
      break;
    default:
      break;
  }


  // Calculate the checksum
  const checkSum: string = this.calculateCheckSum(countryCode, bankIdentification, digits);


  // Return bank account number
  return countryCode + checkSum + bankIdentification[0] + digits;
*/

  return bankIdentification
}

function getRandomBankIdentification(country: string): string[] {
  let bic: string = ''
  let bicValue: number = 0

  // Array source: https://www.betaalvereniging.nl/en/focus/giro-based-and-online-payments/bank-identifier-code-bic-for-sepa-transactions/
  const dutchBIC: string[] = bicValues

  console.log(dutchBIC)

  return ['ok']

  switch (country.toUpperCase()) {
    case 'NL':
      bic = dutchBIC[GenerateRandomNumber(0, dutchBIC.length - 1)]
      break

    case 'BE':
      bicValue = GenerateRandomNumber(0, 999)
      bic = bicValue.toString()

      // Format should be NNN
      if (bic.length == 2) {
        bic = '0' + bic
      } else if (bic.length == 1) {
        bic = '00' + bic
      }
      break

    default:
      bic = 'ERROR'
  }

  bic = bic[0]

  return bic
}

export default GenerateBankaccount
