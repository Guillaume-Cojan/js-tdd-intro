const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

// Check that capitalizeFirstLetters is a function
assert.strictEqual(typeof capitalizeFirstLetters, "function");

// Check that capitalizeFirstLetters accepts one argument
assert.strictEqual(capitalizeFirstLetters.length, 1);

// Check that capitalizeFirstLetters transforms a multiple word phrase
assert.strictEqual(
    capitalizeFirstLetters("i am learning TDD"),
    "I Am Learning TDD"
);

// Check that it works for a 1-word string
assert.strictEqual(capitalizeFirstLetters("russia"), "Russia");

// Check that it works for an empty string
assert.strictEqual(capitalizeFirstLetters(""), "");
