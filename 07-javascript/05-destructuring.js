// Game of Thrones meets JavaScript destructuring. Let's flex those ES6 muscles.
const destructureItems = (input) => {
  // Destructuring the character's first and last name
  const {
    first,
    last,
    allegiance: {
      parents: { mother, father },
    },
  } = input;

  // Returning formatted string as per instructions with indentation and line breaks
  return `${first} ${last}\n  daughter of\n  ${mother} and ${father}`;
};

// Classic Winterfell setup
const sansa = {
  first: "Sansa",
  last: "Stark",
  allegiance: {
    house: "Winterfell",
    parents: {
      mother: "Catelyn Tully",
      father: "Eddard Stark",
    },
    animals: {
      direwolf: "Lady",
    },
  },
};

// Fire & Blood royalty
const daenerys = {
  first: "Daenerys",
  last: "Targaryen",
  allegiance: {
    house: "Targaryen",
    parents: {
      mother: "Queen Rhaella",
      father: "King Aerys II Targaryen",
    },
    animals: {
      dragons: "Drogon",
    },
  },
};

// Tests (no spoilers here)
console.log(destructureItems(sansa));
// Expected:
// Sansa Stark
//   daughter of
//   Catelyn Tully and Eddard Stark

console.log(destructureItems(daenerys));
// Expected:
// Daenerys Targaryen
//   daughter of
//   Queen Rhaella and King Aerys II Targaryen
