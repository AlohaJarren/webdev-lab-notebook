// replaceItems takes in a string and returns a modified version where:
// - any instance of "gold" (case-insensitive) becomes "SHINY"
// - any instance of "wander" (case-insensitive) becomes "roam"
const replaceItems = (input) => {
  // Use regular expressions with the 'gi' flags:
  // g = global (replace all matches)
  // i = case-insensitive (match 'GOLD', 'Gold', etc.)
  const updated = input.replace(/gold/gi, "SHINY").replace(/wander/gi, "roam");

  return updated;
};

// Test cases to verify the function works as intended
console.log(replaceItems("All that is gold does not glitter"));
// expected: 'All that is SHINY does not glitter'

console.log(replaceItems("Wisdom is better than silver or GOLD."));
// expected: 'Wisdom is better than silver or SHINY.'

console.log(replaceItems("Not all those who Wander are lost"));
// expected: 'Not all those who roam are lost'
