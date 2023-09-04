const fs = require('fs');
const csv = require('csv-parser');
const matchesPerYear =require('./src/server/1-matches-per-year.js');
const matchesWonPerYear =require('./src/server/2-matches-won-per-team-per-year.js');

const result=[];

const readCsvFile = () =>{
    fs.createReadStream("./src/data/matches.csv")
    .pipe(csv())
    .on('data',(data)=>{
        return result.push(data)
    })
    .on('end',()=>{
        matchesPerYear(result);
        matchesWonPerYear(result);
    })
}
readCsvFile();
