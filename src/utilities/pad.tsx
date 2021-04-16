/**
 * Converts a value to string and pads it
 *
 * @param input string to pad
 * @param length length of the padded string
 * @param padString what to pad with
 */

export default function pad(
  input: any,
  length: number,
  padString: string
): string {
  const val = input.toString()

  return val.padStart(length, padString)
}
