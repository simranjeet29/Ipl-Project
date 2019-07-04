/* eslint-disable indent */
function EcoBowler(matches, deliveries, year) {
    let start = Number.MAX_SAFE_INTEGER; let end = Number.MIN_SAFE_INTEGER;
    const bowlers = {};
    const over = {};
    let economybowler = [];
    matches.forEach((match) => {
        if (match.season === year) {
            if (match.id < start) start = match.id;
            if (match.id > end) end = match.id;
        }
    });
    // eslint-disable-next-line max-len
    // const data2k16 = deliveries.filter(data => (parseInt(data.id, 10) >= start && parseInt(data.id, 10) <= end));
    deliveries.forEach((data) => {
        if (parseInt(data.id, 10) >= start && parseInt(data.id, 10)) {
            const row = data;
            if (bowlers[row.bowler] === undefined) {
                bowlers[row.bowler] = parseInt(row.totalruns, 10);
                over[row.bowler] = 1;
            } else {
                bowlers[row.bowler] += parseInt(row.totalruns, 10);
                over[row.bowler] += 1;
            }
        }
    });
    // console.log(bowlers);
    // console.log(over);
    const balls = 6;
    for (const key in bowlers) {
        const name = key;
        let economy = (bowlers[key] / over[key]) * balls;
        economy = economy.toFixed(2);
        economybowler.push(new Ecobowlerobj(name, economy));
    }
    economybowler = economybowler.sort((a, b) => a.eco - b.eco).slice(0, 10);
    return economybowler;
}
module.exports = {
    EcoBowler,
};


function Ecobowlerobj(name, eco) {
    const temp = {
        name,
        eco,
    };
    return temp;
}
