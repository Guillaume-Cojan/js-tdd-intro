const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("Rectangle", () => {
    it("is not square if a !== b", () => {
        assert.strictEqual(new Rectangle(3, 5).isSquare(), false);
    });

    it("is square if a === b", () => {
        assert.strictEqual(new Rectangle(5, 5).isSquare(), true);
    });

    it("is returning the area", () => {
        assert.strictEqual(new Rectangle(13, 7).getArea(), 91);
    });

    it("is returning the perimeter", () => {
        assert.strictEqual(new Rectangle(13, 7).getPerimeter(), 40);
    });
});
