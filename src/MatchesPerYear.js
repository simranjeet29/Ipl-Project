/* eslint-disable indent */
function MatchesPerYear(matchesdata) {
    if (matchesdata.length === 0 || matchesdata === undefined) {
        console.log("fgrfhr");
        throw ('error');
    }
    const result = {};
    matchesdata.forEach((element) => {
        const year = element.season;
        if (result[year] === undefined) {
            result[year] = 1;
        } else {
            result[year]++;
        }
    });
    console.log('calculated Matches Per Year');
   return result;
}
module.exports = {
    MatchesPerYear,
};
