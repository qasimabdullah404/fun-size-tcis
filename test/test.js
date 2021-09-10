let x = require("../index");
let expect = require("chai").expect;
let assert = require('assert')

// fun() tests
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
 
 // andFun() Tests
describe('Sum of Numbers tests', () => {
    describe('General tests for #andFun', () => {
        it('should be a function', () => {
            expect(typeof x.andFun).to.equal('function');            
        });
    });
 
    describe('Function tests for #andFun', () => {
        it('should return zero for a zero length input array', () => {
            expect(x.andFun([])).to.equal(0);            
        });
 
        it('should return the member value for a one member array', () => {
            expect(x.andFun([1])).to.equal(1);            
        });
 
        it('should return the member value for a one member array when given as string', () => {
            expect(x.andFun(['1'])).to.equal(1);            
        });
 
        it('should add whole number arrays', () => {
            expect(x.andFun([1,2,3])).to.equal(6);            
        });
 
        it('should add whole number arrays including negative numbers', () => {
            expect(x.andFun([-1,2,3])).to.equal(4);            
        });
 
        it('should add whole number arrays including strings', () => {
            expect(x.andFun([-1,'2',3])).to.equal(4);            
        });
 
        it('should add fractions', () => {
            expect(x.andFun([1.1,2.2,3])).to.be.closeTo(6.3,0.0001);            
        });
 
        //it('should not add non-arrays', () => {
        //    expect(sum(1,2,3)).to.be.NaN;           
        //}); 
 
        it('should not add arrays of invalid data', () => {
            expect(x.andFun(['pesho','gosho'])).to.be.NaN;           
        });
    });
});

// funHello() Tests
describe("Testing funHello", function () {
  describe("#funHello()", function () {
    it("Should return Hello Qasim!", function () {
      expect(x.funHello("Qasim")).to.equal("Hello Qasim!");
    });
  });
});

// justFun() Tests
describe("Testing justFun", function () {
  describe("#justFun()", function () {
    it("Should return Super Tiny Package", function () {
      expect(x.justFun()).to.equal("Super Tiny Package");
    });
  });
});

// jFun() Tests
describe("Testing jFun", function () {
  describe("#jFun()", function () {
    it("Should return This is just a super tiny package.", function () {
      expect(x.jFun()).to.equal("This is just a super tiny package!!");
    });
  });
});