// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("Caesar Cipher", () => {
  describe("Error Handling", () => {
    it("should return false if the shift value is equal to 0", () => {
      const message = "iron man";
      const shift = 0;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });

    it("Should return false if the shift value is less than -25", () => {
      const message = "iron man";
      const shift = -26;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });

    it("Should return false if the shift value is greater than 25", () => {
      const message = "iron man";
      const shift = 26;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });
  });

  describe("Encoding a Message", () => {
    it("should ignore capital letters", () => {
      const message = "Iron Man Lives";
      const shift = 5;
      const actual = caesar(message, shift);
      const expected = "nwts rfs qnajx";
      expect(actual).to.equal(expected);
    });

    it("should handle shifts that go past the end of the alphabet", () => {
      const message = "Snazzy";
      const shift = 5;
      const actual = caesar(message, shift);
      const expected = "xsfeed";
      expect(actual).to.equal(expected);
    });

    it("should handle shifts that go past the beginning of the alphabet", () => {
      const message = "Sebastian Stan";
      const shift = -5;
      const actual = caesar(message, shift);
      const expected = "nzwvnodvi novi";
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other nonalphabetic symbols after encoding", () => {
      const message = "Guards!!! Guards!!!";
      const shift = 5;
      const actual = caesar(message, shift);
      const expected = "lzfwix!!! lzfwix!!!";
      expect(actual).to.equal(expected);
    });

    it("should encode a message by shifting the letters", () => {
      const message = "Iron Man";
      const shift = 5;
      const actual = caesar(message, shift);
      const expected = "nwts rfs";
      expect(actual).to.equal(expected);
    });
  });

  describe("Decoding a Message", () => {
    it("should ignore capital letters", () => {
      const message = "nwts rfs qnajx";
      const shift = 5;
      const actual = caesar(message, shift, false);
      const expected = "iron man lives";
      expect(actual).to.equal(expected);
    });

    it("should handle shifts that go past the end of the alphabet", () => {
      const message = "xsfeed";
      const shift = -5;
      const actual = caesar(message, shift);
      const expected = "snazzy";
      expect(actual).to.equal(expected);
    });

    it("should handle shifts that go past the beginning of the alphabet", () => {
      const message = "nzwvnodvi novi";
      const shift = 5;
      const actual = caesar(message, shift);
      const expected = "sebastian stan";
      expect(actual).to.equal(expected);
    });

    it("should maintain spaces and other nonalphabetic symbols after decoding", () => {
      const message = "lzfwix!!! lzfwix!!!";
      const shift = -5;
      const actual = caesar(message, shift);
      const expected = "guards!!! guards!!!";
      expect(actual).to.equal(expected);
    });

    it("should decode a message by shifting the letters", () => {
      const message = "nwts rfs";
      const shift = -5;
      const actual = caesar(message, shift);
      const expected = "iron man";
      expect(actual).to.equal(expected);
    });
  });
});
