/* eslint-disable indent */
const func1 = require('./../Features/MatchesPerYear.js');
const { expect } = require('chai');

describe('ipl', () => {
  it('should work', () => {
    const dataset1 = [{ id: 1, season: '2008', winner: 'Kolkata' },
    { id: 2, season: '2008', winner: 'Kolkata' },
    { id: 3, season: '2009', winner: 'Kolkata' },
    { id: 4, season: '2009', winner: 'Punjab' }];
    try {
      const dataset2 = [];
      const result = func1.MatchesPerYear(dataset2);
      const expected = { 2008: 2, 2009: 2 };
      expect(result).to.deep.equal(expected);
    } catch (err) {
      console.log(err);
      throw (err);
    }
  });
});
