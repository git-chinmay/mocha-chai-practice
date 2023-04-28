var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

//writing a test
const chai = require("chai");
const expect = chai.expect;
describe("Arry test", function(){
    it("it shuld return 1", function(){
        expect([1,2,3][0]).to.equal(1);
    })

    it("it shuld return 3", function(){
        expect([1,2,3][2]).to.equal(3);
    })


    it("length should be 3", function(){
        expect([1,2,3].length).to.equal(3);
    })

    it("expect length check", function(){
        expect([1,2,3]).to.lengthOf(3);
    })
})


describe("Object Match", ()=>{
    const myObject = {
        item: [1,2,3],
        value: "test value"
    }

    it("Object property item exists", ()=>{
        expect(myObject).to.have.property('item');
    });

    it("Object property item type", ()=>{
        expect(myObject).to.have.property('item').to.be.an('array');
    });

    it("Object property item length", ()=>{
        expect(myObject).to.have.property('item').with.lengthOf(3);
    });

    it("Object items", ()=>{
        expect(myObject).to.have.all.keys('item', 'value');
    });

    it("Object item value check", ()=>{
        expect(myObject['item'][1]).to.equal(2);
    });


})