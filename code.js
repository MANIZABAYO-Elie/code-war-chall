function sumOddCubes(arr) {
  if (!Array.isArray(arr)) return undefined;

  for (let val of arr) {
    if (typeof val !== 'number') {
      return undefined;
    }
  }

  return arr
    .map(n => Math.pow(n, 3))      // Cube each number
    .filter(n => n % 2 !== 0)      // Keep only odd numbers
    .reduce((sum, n) => sum + n, 0); // Sum them
}
console.log(sumOddCubes([1, 2, 3, 4]));     // Outputs: 28 (1^3 + 3^3 = 1 + 27)
console.log(sumOddCubes([6, 8, 9, 12]));