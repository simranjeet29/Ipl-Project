/* eslint-disable indent */
const func4 = require('./../Features/ecobowler.js');
const { expect } = require('chai');

describe('ipl', () => {
    it('should work', () => {
        const dataset1 = [{ id: 1, season: '2007', winner: 'Kolkata' },
        { id: 2, season: '2009', winner: 'Kolkata' },
        { id: 3, season: '2009', winner: 'Kolkata' },
        { id: 4, season: '2009', winner: 'Kolkata' },
        { id: 5, season: '2009', winner: 'Punjab' }];
        const dataset2 = [{
            id: 1, bat: 'kolkata', extra: 5, bowler: 'xyz', totalruns: 4,
        },
        {
            id: 1, bat: 'kolkata', extra: 5, bowler: 'xyz', totalruns: 4,
        },
        {
            id: 1, bat: 'kolkata', extra: 5, bowler: 'xyz', totalruns: 4,
        },
        {
            id: 1, bat: 'kolkata', extra: 5, bowler: 'xyz', totalruns: 4,
        },
        {
            id: 1, bat: 'kolkata', extra: 5, bowler: 'xyz', totalruns: 4,
        },
        {
            id: 1, bat: 'kolkata', extra: 5, bowler: 'xyz', totalruns: 4,
        },
        {
            id: 1, bat: 'punjab', extra: 5, bowler: 'abc', totalruns: 1,
        },
        {
            id: 1, bat: 'punjab', extra: 5, bowler: 'abc', totalruns: 2,
        },
        {
            id: 1, bat: 'punjab', extra: 5, bowler: 'abc', totalruns: 4,
        },
        {
            id: 1, bat: 'punjab', extra: 5, bowler: 'abc', totalruns: 4,
        },
        {
            id: 1, bat: 'punjab', extra: 5, bowler: 'abc', totalruns: 6,
        },
        {
            id: 1, bat: 'punjab', extra: 5, bowler: 'abc', totalruns: 10,
        }];
        const result = func4.EcoBowler(dataset1, dataset2, '2007');
        const expected = [{ name: 'xyz', eco: '24.00' }, { name: 'abc', eco: '27.00' }];
        expect(result).to.deep.equal(expected);
    });
});
