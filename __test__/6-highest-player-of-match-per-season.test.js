/* eslint-disable no-undef */
const highestPlayerOfMatchPerSeason = require('../src/server/6-highest-player-of-match-per-season.js');

const sample = [
  { season: '2001', player_of_match: 'suresh' },
  { season: '2001', player_of_match: 'mahesh' },
  { season: '2001', player_of_match: 'ramesh' },
  { season: '2001', player_of_match: 'ramesh' },
  { season: '2002', player_of_match: 'mahesh' },
  { season: '2002', player_of_match: 'sonu' },
  { season: '2002', player_of_match: 'sonu' },
  { season: '2002', player_of_match: 'sonu' },
  { season: '2002', player_of_match: 'ramesh' },
  { season: '2003', player_of_match: 'ramesh' },
  { season: '2003', player_of_match: 'suresh' },
  { season: '2003', player_of_match: 'sonu' },
  { season: '2003', player_of_match: 'suresh' },
  { season: '2003', player_of_match: 'sonu' },
  { season: '2004', player_of_match: 'ramesh' },
  { season: '2004', player_of_match: 'mahesh' },
  { season: '2004', player_of_match: 'ramesh' },
  { season: '2004', player_of_match: 'sonu' },
  { season: '2004', player_of_match: 'mahesh' },
];

test('highest player of match in a season working fine', () => {
  expect(highestPlayerOfMatchPerSeason(sample, [])).toMatchObject([
    { season: '2001', player: ['ramesh'] },
    { season: '2002', player: ['sonu'] },
    { season: '2003', player: ['suresh','sonu'] },
    { season: '2004', player: ['ramesh','mahesh'] },
  ]);
});
