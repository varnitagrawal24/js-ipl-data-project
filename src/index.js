const fs = require('fs');
const csv = require('csvtojson');
const createJson = require("./server/createJsonFile.js")

const matchesPerYear = require('./server/1-matches-per-year.js');
const matchesWonPerYear = require('./server/2-matches-won-per-team-per-year.js');
const extraRunsPerTeam = require('./server/3-extra-run-per-team-2016.js');



const resolveQuery = (callback,fileName) => {
    csv()
        .fromFile("./data/matches.csv")
        .then((resultMatch) => {

            csv()
                .fromFile("./data/deliveries.csv")
                .then((resultDelivery) => {
                    const result=callback(resultMatch,resultDelivery);
                    createJson(result,fileName);
                })
        })
}

//Q1=>

resolveQuery(matchesPerYear,"1-matchesPerYear.json");

//Q2=>

resolveQuery(matchesWonPerYear,"2-matchesWonPerTeamPerYear.json");

//Q3=>

resolveQuery(extraRunsPerTeam,"3-extraRunsPerTeam.json");