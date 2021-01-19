export default function capitalizeString(string: string): string {
  const lowerCaseWords = string.toLowerCase().split(' ');
  const capitalizedWords = lowerCaseWords.map(word => {
    const letters = word.split('');
    letters[0] = letters[0].toUpperCase();
    return letters.join('');
  });
  return capitalizedWords.join(' ');
}
