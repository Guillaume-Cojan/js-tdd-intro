const assert = require("assert");

// WRITE CAPITALIZE FIRST LETTERS

const capitalizeFirstLetters = (str) => {
    return str.length > 0
        ? str
              .split(" ")
              .map((word) => word[0].toUpperCase() + word.slice(1))
              .join(" ")
        : "";
};

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, "function");

// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(""), "");

// Check that it works for a 1-letter string
assert.strictEqual(capitalizeFirstLetters("a"), "A");

// Check that it works for a 1-word string
assert.strictEqual(capitalizeFirstLetters("russia"), "Russia");

// Check that capitalizeFirstLetters transforms a multiple word phrase
assert.strictEqual(
    capitalizeFirstLetters("i am learning TDD"),
    "I Am Learning TDD"
);
