import { expect } from 'chai';
import { describe, it } from 'mocha';
import sinon from 'sinon';
import { shuffleArray } from '../App';
import { QUIZ_DATABASE } from '../constants';

describe('Array', () => {
   describe('#shuffleArray(x)', () => {
   afterEach(() => {
	sinon.restore();
   });

   it('shuffleArray(x) x is a T[]/array type', () => {
	let array: {send: T[] } = {
	   send: sinon.fake.returns(QUIZ_DATABASE)
	}

	let proxy: T[] = array.send;

	expect(proxy()).to.be.a('Array');
   })

   it('The return need be a array and value need be the same items of QUIZ_DATABASE', () => {
	   let fake = sinon.fake(function (x) {
		return shuffleArray(x);
	   });

	   let array : {shuffle : T[]} = {
	      shuffle : fake(QUIZ_DATABASE)
	   };

	   let newArray = array.shuffle

	   expect(newArray).to.be.a('Array');
	   expect(newArray).to.have.members(QUIZ_DATABASE);
	   expect(fake.calledOnce).to.equal(true);
	   expect(fake.calledWith(QUIZ_DATABASE)).to.equal(true);
   });

   it('The return need be randomized values', () => {
	   let fake = sinon.fake(function (x) {
		return shuffleArray(x);
	   });

	   let array : {shuffle : T[]} = {
	      shuffle : fake(QUIZ_DATABASE)
	   };

	   let newArray = array.shufle;

	   expect(newArray).to.not.equal(QUIZ_DATABASE);
	   expect(fake.calledOnce).to.equal(true);
	   expect(fake.calledWith(QUIZ_DATABASE)).to.equal(true);
   });

   it('The function shuffleArray(x) can not change QUIZ_DATABASE', () => {
	   let fake = sinon.fake(function (x) {
		return shuffleArray(x);
	   });

	   let array : {shuffle : T[]} = {
	      shuffle : fake(QUIZ_DATABASE)
	   };

	   let QUIZ_DATABASE_COPY = sinon.fake.returns(QUIZ_DATABASE);
	   let proxy = QUIZ_DATABASE_COPY;

	   let newArray = array.shuffle;

	   expect(QUIZ_DATABASE).to.equal(proxy());
	   expect(fake.calledOnce).to.equal(true);
	   expect(fake.calledWith(QUIZ_DATABASE)).to.equal(true);
   });
 });
});
