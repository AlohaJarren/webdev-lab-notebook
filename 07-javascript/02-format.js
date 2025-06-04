// formatItems takes in an array of numbers and:
// - Returns a single string of numbers
// - Each number has 3 digits after the decimal
// - Numbers are separated by commas
const formatItems = (input) => {
  // Use .map to format each number to 3 decimal places
  // .toFixed(3) returns a string, not a number — which is what we want here
  const formatted = input.map((num) => num.toFixed(3));

  // Join the formatted strings with a comma and space
  return formatted.join(", ");
};

// Test Cases - Each one confirms precise 3-decimal formatting
console.log(formatItems([1, 4, 17, 26, 41]));
// expected: '1.000, 4.000, 17.000, 26.000, 41.000'

console.log(formatItems([34.0, 12.0, 13.7, 760.1, 10.5]));
// expected: '34.000, 12.000, 13.700, 760.100, 10.500'

console.log(formatItems([235.235778, 1.2346789, 14.7, 97.3, 714.1245678]));
// expected: '235.236, 1.235, 14.700, 97.300, 714.125'
