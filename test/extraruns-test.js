/* eslint-disable indent */
const func3 = require('../Features/Extras.js');
const { expect } = require('chai');

describe('ipl', () => {
    it('should work', () => {
        const dataset1 = [{ id: 1, season: '2008', winner: 'Kolkata' },
        { id: 2, season: '2008', winner: 'Kolkata' },
        { id: 3, season: '2009', winner: 'Kolkata' },
        { id: 4, season: '2009', winner: 'Kolkata' },
        { id: 5, season: '2009', winner: 'Punjab' }];
        const dataset2 = [{
            id: 2, bat: 'kolkata', extra: 5, bowler: 'xyz', totalruns: 4,
        },
        {
            id: 2, bat: 'kolkata', extra: 5, bowler: 'xyz', totalruns: 4,
        },
        {
            id: 2, bat: 'kolkata', extra: 5, bowler: 'xyz', totalruns: 4,
        },
        {
            id: 2, bat: 'kolkata', extra: 5, bowler: 'xyz', totalruns: 4,
        },
        {
            id: 2, bat: 'kolkata', extra: 5, bowler: 'xyz', totalruns: 4,
        },
        {
            id: 4, bat: 'kolkata', extra: 5, bowler: 'xyz', totalruns: 4,
        },
        {
            id: 4, bat: 'punjab', extra: 5, bowler: 'abc', totalruns: 1,
        },
        {
            id: 4, bat: 'punjab', extra: 5, bowler: 'abc', totalruns: 2,
        },
        {
            id: 4, bat: 'punjab', extra: 5, bowler: 'abc', totalruns: 4,
        },
        {
            id: 4, bat: 'punjab', extra: 5, bowler: 'abc', totalruns: 4,
        },
        {
            id: 4, bat: 'punjab', extra: 5, bowler: 'abc', totalruns: 6,
        },
        {
            id: 5, bat: 'punjab', extra: 5, bowler: 'abc', totalruns: 10,
        }];
        const result = func3.ExtraRuns(dataset1, dataset2, '2009');
        const expected = { kolkata: 5, punjab: 30 };
        expect(result).to.deep.equal(expected);
    });
});
