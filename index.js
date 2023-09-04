const fs = require('fs');
const csv = require('csvtojson');
const createJson = require("./src/server/createJsonFile.js")

const matchesPerYear = require('./src/server/1-matches-per-year.js');
const matchesWonPerYear = require('./src/server/2-matches-won-per-team-per-year.js');




const readCsvFile = (callback,fileName) => {
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

readCsvFile(matchesPerYear,"1-matchesPerYear.json");

//Q2=>

readCsvFile(matchesWonPerYear,"2-matchesWonPerTeamPerYear.json")



