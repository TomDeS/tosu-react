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
