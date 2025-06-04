// Global object to hold all key-value pairs
let result = {};

// insertItem: Adds a new property to the result object
const insertItem = (key, value) => {
  result[key] = value; // easy insert syntax
};

// deleteItem: Removes a key if it exists
const deleteItem = (key) => {
  delete result[key]; // silently fails if key doesn't exist, which is fine here
};

// lookupItem: Returns the value if found, or fallback string
const lookupItem = (key) => {
  // Check if the key exists before trying to access
  return result.hasOwnProperty(key) ? result[key] : "Item does not exist";
};

// printItems: Returns a comma-separated string of the keys in the object
const printItems = () => {
  return Object.keys(result).join(", ");
};

// TEST CASES
insertItem("hello", "world");
insertItem("lorem", "ipsum");
insertItem("sit", "amet");

console.log(printItems());
// expected: 'hello, lorem, sit' (order may be different; JS objects aren't ordered like arrays)

console.log(lookupItem("lorem"));
// expected: 'ipsum'

deleteItem("lorem");

console.log(printItems());
// expected: 'hello, sit' (order may be different)

console.log(lookupItem("lorem"));
// expected: 'Item does not exist'
