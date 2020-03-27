'use strict';

const doA = require('../lib/serviceA/moduleA');
const doB = require('../lib/serviceB/moduleB');
const doC = require('../lib/serviceC/moduleC');

describe('services', () => {
  test('should do A, B and C', () => {
    const abc = [doA(), doB(), doC()];
    expect(abc).toEqual(['A', 'B', 'C']);
  });
})