let assert = require("assert");
let Phrase = require("../index.js");
const { describe } = require("node:test");

describe("Phrase", function() {
  describe("#palindrome", function() {
    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", function() {
      let mixedCasePalindrome = new Phrase("RaceCar");
      assert(mixedCasePalindrome.palindrome());
    });

    it("should return true for a palindrome with punctuation", function(){
      let punctuationPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuationPalindrome.palindrome());
    });
  });

  describe("#processedContent", function() {
    it("should only return lower case letters", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.equal(punctuatedPalindrome.processedContent(), "madamimadam");
    });
  });
});
