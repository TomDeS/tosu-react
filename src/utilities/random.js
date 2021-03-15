/*const GenerateRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default GenerateRandomNumber
*/

/*
const GenerateRandomNumber = (min: number, max: number): number => {
  // Window is not available at build time!
  if (typeof window !== 'undefined') {
    const range = max - min
    const int = window.crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32
    console.log('window.crypto')
    return Math.floor(int * range + min)
  } else {
    console.log('math.random')
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}

export default GenerateRandomNumber
*/
exports.GenerateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
