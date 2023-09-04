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
const sample=[
    {season:2008,winner:'chk'},
    {season:2017,winner:'rbc'},
    {season:2015,winner:'mi'},
    {season:2016,winner:'mi'},
    {season:2017,winner:'mi'},
    {season:2008,winner:'chk'},
    ];
    console.log(matchesWonPerYear(sample));


