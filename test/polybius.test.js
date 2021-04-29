// Write your tests here!
const expect = require('chai').expect;
const { polybius } = require("../src/polybius");

describe("Polybius Square", () => {
    describe("Encoding a message", () => {
        it("should encode a message by translating each letter into 2 numbers", () => {
            const message = "Hawkeye";
            const actual = polybius(message);
            const expected = "32112552514551"
            expect(actual).to.equal(expected)
        })

        it("should translate the letters i and j to 42", () => {
            const message = "jiminy";
            const actual = polybius(message);
            const expected = "424223423345"
            expect(actual).to.equal(expected);
        })

        it("should keep the spaces without change", () => {
            const message = "Captain America";
            const actual = polybius(message);
            const expected = "31115344114233 11235124423111"
            expect(actual).to.equal(expected);
        })
    });

    describe("Decoding a message", () => {
        it("should decode a message by translating 2 numbers into a letter", () => {
            const message = "32112552514551";
            const actual = polybius(message, false);
            const expected = "hawkeye"
            expect(actual).to.equal(expected);
        })

        it("should translate the letters i and j to 42", () => {
            const message = "424223423345";
            const actual = polybius(message, false);
            const expected = "jiminy"
            expect(actual).to.include('i');
            expect(actual).to.include('j');
        })

        it("should ignore capital letters", () => {
            const message = "345342415124231133";
            const actual = polybius(message, false);
            const expected = "spi/jderman"
            expect(actual).to.equal(expected);
        })

        it("should keep the spaces without change", () => {
            const message = "31115344114233 11235124423111";
            const actual = polybius(message, false);
            const expected = "captai/jn ameri/jca"
            expect(actual).to.equal(expected);
        })     
    })
})