export default function prependZero(number: number): string {
  return number < 10 && number > -10 ? `0${number}` : `${number}`;
}
