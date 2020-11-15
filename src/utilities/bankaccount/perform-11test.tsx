export function perform11test(nr: number[]): boolean {
  let sum: number = 0
  let j: number = 0
  let i: number = 0

  for (i = 10; i >= 1; i--) {
    sum += nr[j] * i
    j++
  }

  if (sum % 11 === 0) {
    return true
  }

  return false
}
