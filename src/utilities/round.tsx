export default function round(nr: number, figures = 2): number {
  const factor = 10 ** figures

  const rounded = Math.round((nr + Number.EPSILON) * factor) / factor

  return rounded
}
