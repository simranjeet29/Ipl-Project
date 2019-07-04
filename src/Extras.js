
/* eslint-disable indent */
function ExtraRuns(matches, deliveries, year) {
    const extrasperteam = {};
    let start = Number.MAX_SAFE_INTEGER; let end = Number.MIN_SAFE_INTEGER;
    matches.forEach((match) => {
        if (match.season === year) {
            if (match.id < start) start = match.id;
            if (match.id > end) end = match.id;
        }
    });
    // eslint-disable-next-line max-len
    const deliveries2k16 = deliveries.filter(data => (parseInt(data.id, 10) >= start && parseInt(data.id, 10) <= end));
    deliveries2k16.forEach((element) => {
        const { bat } = element;
        const runs = element.extra;
        if (extrasperteam[bat] === undefined) {
            extrasperteam[bat] = parseInt(runs, 10);
        } else {
            extrasperteam[bat] += parseInt(runs, 10);
        }
    });
     return extrasperteam;
}
module.exports = {
    ExtraRuns,
};
