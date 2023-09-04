const fs = require('fs');
const csv = require('csvtojson');
const createJson = require("./server/createJsonFile.js")

const matchesPerYear = require('./server/1-matches-per-year.js');
const matchesWonPerYear = require('./server/2-matches-won-per-team-per-year.js');




const resolveQuery = (callback,fileName) => {
    csv()
        .fromFile("./src/data/matches.csv")
        .then((resultMatch) => {

            csv()
                .fromFile("./src/data/deliveries.csv")
                .then((resultDelivery) => {
                    const result=callback(resultMatch,resultDelivery);
                    createJson(result,fileName);
                })
        })
}

//Q1=>

resolveQuery(matchesPerYear,"1-matchesPerYear.json");

//Q2=>

resolveQuery(matchesWonPerYear,"2-matchesWonPerTeamPerYear.json")

