// capitalizeFirst.js
const assert = require("assert");

// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirst(input) {
    return input
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Check that capitalizeFirst is a function
assert.strictEqual(typeof capitalizeFirst, "function");

// Check that capitalizeFirst accepts one argument
assert.strictEqual(capitalizeFirst.length, 1);

// Check that capitalizeFirst transforms i am learning TDD correctly
assert.strictEqual(capitalizeFirst("i am learning TDD"), "I Am Learning TDD");

// Check that it works for a 1-character string
assert.strictEqual(capitalizeFirst("learning"), "Learning");

// Check that it works for an empty string
assert.strictEqual(capitalizeFirst(""), "");