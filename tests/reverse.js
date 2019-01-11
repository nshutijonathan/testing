const {expect}=require('chai');
let {reverseString,sum}=require('../src')

describe('Reverse',()=>{
	it("Should Reverse a string",()=>{
		expect(reverseString('hello')).to.equal('olleh')
		
	})
})
describe('adding',()=>{
	it('sum of 5 intigers',()=>{
		expect(sum(1,2,3,4,4)).to.equal(14);
		expect(sum(1,2)).to.equal(3);
	});
})