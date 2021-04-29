// Write your tests here!
const {expect} = require("chai");
const {substitution} = require("../src/substitution");

describe.only("Substitution", () => {
    describe("Error handling", () => {
      it("should return false if the alphabet is missing", () => {
        const message = "Scarlet Witch";
        const actual = substitution(message);
        expect(actual).to.be.false;
      });
  
      it("should return false if the alphabet is not exactly 26 characters", () => {
        const message = "Thor";
        const alphabet = "loki";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });
  
      it("should return false if the alphabet doesn't contain unique characters", () => {
        const message = "Thor Oakenshield";
        const alphabet = "theavengersareheretosaveus";
        const actual = substitution(message, alphabet);
        expect(actual).to.be.false;
      });
    });
  
    describe("Encoding a message", () => {
      it("should encode a message by using the given alphabet", () => {
        const message = "War Machine";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet);
        const expected = "spx ypmjbgk";
        expect(actual).to.equal(expected);
      });
  
      it("should work with any kind of key with unique characters", () => {
        const message = "To Infinity and Beyond";
        const alphabet = ".waeszrdxtfcyg$uhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "j$ xgzxgxjp .ge wsp$ge";
        expect(actual).to.equal(expected);
      });
  
      it("should keep the spaces as is", () => {
        const message = "The Age of Ultron";
        const alphabet = ".waeszrdxtfcyg$uhbijnokmpl";
        const actual = substitution(message, alphabet);
        const expected = "jds .rs $z ncjb$g";
        expect(actual).to.equal(expected);
      });
    });
  
    describe("Decoding a message", () => {
      it("should decode a message by using the given alphabet", () => {
        const message = "spgopebrbcg";
        const alphabet = "plmoknijbuhvygctfxrdzeswaq";
        const actual = substitution(message, alphabet, false);
        const expected = "wandavision";
        expect(actual).to.equal(expected);
      });
  
      it("should work with unique characters", () => {
        const message = "k.ge.oxixvg";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "wandavision";
        expect(actual).to.equal(expected);
      });
  
      it("should keep spaces as is", () => {
        const message = "a.uj.xg .ysbxa.";
        const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
        const actual = substitution(message, alphabet, false);
        const expected = "captain america";
        expect(actual).to.equal(expected);
      });
    });
  });
  
