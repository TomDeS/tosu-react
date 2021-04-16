/**
 * Generates a pseudeo random number
 *
 * @param min lower bound (including)
 * @param max upper bound (including)
 * @param round integer or not
 */

export default function randomNumber(
  min: number,
  max: number,
  round = true
): number {
  let rndm = Math.random() * (max - min + 1) + min

  if (round) {
    rndm = Math.floor(rndm)
  }

  return rndm
}
