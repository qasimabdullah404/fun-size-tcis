let x = require("../index");
let assert = require('assert')
describe("Testing when value is a string", function () {
  describe("#fun()", function () {
    it("Should pass as the value is a string", function () {
      x.fun("Some string...");
    });
  });
});

describe("Testing when value is not a string", function () {
  describe("#fun()", function () {
    it("Should fail as the value is not a string", function () {
        assert.throws(() => {
            x.fun(12345);
        });
    });
  });
});
