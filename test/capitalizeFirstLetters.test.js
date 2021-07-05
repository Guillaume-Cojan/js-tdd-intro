const assert = require("assert");
const capitalizeFirstLetters = require("../capitalizeFirstLetters");

describe("capitalizeFirstLetters", () => {
    it("is a function accepting one argument", () => {
        assert.strictEqual(typeof capitalizeFirstLetters, "function");
        assert.strictEqual(capitalizeFirstLetters.length, 1);
    });

    it("is accepting an empty string", () => {
        assert.strictEqual(capitalizeFirstLetters(""), "");
    });

    it("is accepting one letter", () => {
        assert.strictEqual(capitalizeFirstLetters("a"), "A");
    });

    it("is accepting one word", () => {
        assert.strictEqual(capitalizeFirstLetters("russia"), "Russia");
    });

    it("transform a string correctly", () => {
        assert.strictEqual(
            capitalizeFirstLetters("i am learning TDD"),
            "I Am Learning TDD"
        );
    });
});
