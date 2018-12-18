import { expect } from 'chai';
// import * as window from 'global/window';

import { deepEqual } from '../src/index';

describe('deep equal', () => {
  describe('primitive', () => {
    it('equal', () => {
      expect(deepEqual(null, null)).to.be.equal(true);
      expect(deepEqual(undefined, undefined)).to.be.equal(true);
      expect(deepEqual(1, 1)).to.be.equal(true);
      expect(deepEqual('1', '1')).to.be.equal(true);
      expect(deepEqual(true, true)).to.be.equal(true);
      expect(deepEqual(false, false)).to.be.equal(true);
      const tag = Symbol();
      expect(deepEqual(tag, tag)).to.be.equal(true);
    });

    it('not equal', () => {
      expect(deepEqual(null, undefined)).to.be.equal(false);
      expect(deepEqual(undefined, null)).to.be.equal(false);
      expect(deepEqual(1, 2)).to.be.equal(false);
      expect(deepEqual('1', 1)).to.be.equal(false);
      expect(deepEqual(true, false)).to.be.equal(false);
      expect(deepEqual(false, true)).to.be.equal(false);
      const tag = Symbol();
      const tag2 = Symbol();
      expect(deepEqual(tag, tag2)).to.be.equal(false);
    });
  });

  describe('function', () => {
    const fn = () => null;
    const fn1 = fn;
    const fn2 = () => null;

    it('equal', () => {
      expect(deepEqual(fn, fn1)).to.be.equal(true);
    });

    it('not equal', () => {
      expect(deepEqual(fn, fn2)).to.be.equal(false);
      expect(deepEqual(fn1, fn2)).to.be.equal(false);
    });
  });

  describe('array', () => {
    const data1 = [1, 2, 3, '4', false, true];
    const data2 = [1, 2, 3, '4', false, true];
    const data3 = [1, 2, 3, '4', false, true, false];

    it('equal', () => {
      expect(deepEqual(data1, data2)).to.be.equal(true);
    });

    it('not equal', () => {
      expect(deepEqual(data1, data3)).to.be.equal(false);
      expect(deepEqual(data2, data3)).to.be.equal(false);
    });
  });

  describe('object', () => {
    const data1 = {
      x: 1,
      y: '2',
      z: '3',
    };
    const data2 = {
      x: 1,
      y: '2',
      z: '3',
    };
    const data3 = {
      x: 1,
      y: '2',
      z: '3',
      a: false,
      b: true,
    };

    it('equal', () => {
      expect(deepEqual(data1, data2)).to.be.equal(true);
    });

    it('not equal', () => {
      expect(deepEqual(data1, data3)).to.be.equal(false);
      expect(deepEqual(data2, data3)).to.be.equal(false);
      expect(deepEqual(data3, data1)).to.be.equal(false);
      expect(deepEqual(data3, data2)).to.be.equal(false);
    });
  });
});
