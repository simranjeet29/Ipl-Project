/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable no-plusplus */
/* eslint-disable indent */
const csv = require('csv');
const http = require('http');
const fs = require('fs');
const func1 = require('./Features/MatchesPerYear.js');
const func2 = require('./Features/MatchesWonPerYear.js');
const func3 = require('./Features/Extras.js');
const func4 = require('./Features/ecobowler.js');

const obj = csv();
const obj1 = csv();


function Matchesobj(id, season, winner) {
    const temp = {
        id,
        season,
        winner,
    };
    return temp;
}

function Deliveriesobj(id, bat, extra, bowler, totalruns) {
    const temp = {
        id,
        bat,
        extra,
        bowler,
        totalruns,
    };
    return temp;
}
function readmatches() {
    return new Promise(((resolve) => {
        const csvData = [];
        obj.from.path('./Dataset/matches.csv').to.array((data) => {
            for (let i = 1; i < data.length; i++) {
                csvData.push(new Matchesobj(data[i][0], data[i][1], data[i][10]));
            }
            resolve(csvData);
        });
    }));
}
function readdeliveries() {
    return new Promise(((resolve) => {
        const csvData = [];
        obj1.from.path('./Dataset/deliveries.csv').to.array((data) => {
            for (let i = 1; i < data.length; i++) {
                csvData.push(new Deliveriesobj(data[i][0], data[i][2], data[i][16], data[i][8], data[i][17]));
            }
            resolve(csvData);
        });
    }));
}
function writedata(resultobj) {
    const jsonString = JSON.stringify(resultobj);
    fs.writeFile('./result.json', jsonString, (err) => {
        if (err) {
            console.log('Error writing file', err);
        } else {
            console.log('dumped result');
        }
    });
}
function service(request, response) {
    if (request.method === 'GET') {
        console.log('ok');
        response.writeHead(200, { 'content-Type': 'application/json' });
        fs.createReadStream('./result.json').pipe(response);
    } else {
        response.writeHead(404, { 'content-Type': 'text/plain' });
        response.write('file not found');
        response.end();
    }
}


const p1 = readmatches();
const p2 = readdeliveries();

Promise.all([p1, p2]).then((result) => {
    const output = [];
    let resultobj = func1.MatchesPerYear(result[0]);
    output.push(resultobj);
    resultobj = func2.MatchesWonPerYear(result[0]);
    output.push(resultobj);
    resultobj = func3.ExtraRuns(result[0], result[1], '2016');
    output.push(resultobj);
    resultobj = func4.EcoBowler(result[0], result[1], '2015');
    output.push(resultobj);
    writedata(output);
    http.createServer(service).listen(8888);
});
