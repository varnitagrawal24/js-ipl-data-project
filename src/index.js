const csv = require('csvtojson');
const createJson = require('./server/createJsonFile.js');

const matchesPerYear = require('./server/1-matches-per-year.js');
const matchesWonPerYear = require('./server/2-matches-won-per-team-per-year.js');
const extraRunsPerTeam = require('./server/3-extra-run-per-team-2016.js');
const topEconomicalBowlers = require('./server/4-economical-bowler.js');
const teamWinMatchesAndToss = require('./server/5-team-win-match-toss.js');
const highestPlayerOfMatchPerSeason = require('./server/6-highest-player-of-match-per-season.js');
const strikeRateOfBatsman = require('./server/7-strike-rate-of-batsman.js');
const highestPlayerDismissed = require('./server/8-highest-player-dismissed.js');
const bestEconomyBowlerInSuperOver = require('./server/9-best-economy-super-over.js');

const resolveQuery = (callback, fileName) => {
  csv()
    .fromFile('./data/matches.csv')
    .then((resultMatch) => {
      csv()
        .fromFile('./data/deliveries.csv')
        .then((resultDelivery) => {
          const result = callback(resultMatch, resultDelivery);
          createJson(result, fileName);
        });
    });
};

// Q1=>

resolveQuery(matchesPerYear, '1-matchesPerYear.json');

// Q2=>

resolveQuery(matchesWonPerYear, '2-matchesWonPerTeamPerYear.json');

// Q3=>

resolveQuery(extraRunsPerTeam, '3-extraRunsPerTeam.json');

// Q4=>

resolveQuery(topEconomicalBowlers, '4-top10EconomicalBowlers.json');

// Q5=>

resolveQuery(teamWinMatchesAndToss, '5-teamWinMatchesAndToss.json');

// Q6=>

resolveQuery(
  highestPlayerOfMatchPerSeason,
  '6-highestPlayerOfMatchPerSeason.json',
);

// Q7=>

resolveQuery(strikeRateOfBatsman, '7-strikeRateOfBatsman.json');

// Q8=>

resolveQuery(highestPlayerDismissed, '8-highestPlayerDismissed.json');

// Q9=>

resolveQuery(
  bestEconomyBowlerInSuperOver,
  '9-bestEconomyBowlerInSuperOver.json',
);
