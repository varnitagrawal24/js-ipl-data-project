/* eslint-disable no-undef */
const highestPlayerDismissed = require('../src/server/8-highest-player-dismissed.js');

const sample = [
  { player_dismissed: 'kumar', bowler: 'bumra' },
  { player_dismissed: 'umesh', bowler: 'shami' },
  { player_dismissed: 'ishant', bowler: 'pandya' },
  { player_dismissed: 'umesh', bowler: 'ashwin' },
  { player_dismissed: 'starc', bowler: 'bumra' },
  { player_dismissed: 'kumar', bowler: 'ashwin' },
  { player_dismissed: 'ashwin', bowler: 'shami' },
  { player_dismissed: 'jadeja', bowler: 'pandya' },
  { player_dismissed: 'thakur', bowler: 'shami' },
  { player_dismissed: 'ishan', bowler: 'ashwin' },
  { player_dismissed: 'kumar', bowler: 'shami' },
  { player_dismissed: 'shami', bowler: 'pandya' },
  { player_dismissed: 'umesh', bowler: 'bumra' },
  { player_dismissed: 'ishant', bowler: 'ashwin' },
  { player_dismissed: 'umesh', bowler: 'pandya' },
  { player_dismissed: 'kumar', bowler: 'shami' },
  { player_dismissed: 'shami', bowler: 'ashwin' },
  { player_dismissed: 'umesh', bowler: 'bumra' },
  { player_dismissed: 'ishant', bowler: 'bumra' },
];

test('highest player of dimissed working fine', () => {
  expect(highestPlayerDismissed([], sample)).toMatchObject([
    { bowler: 'shami', number_of_dismissed: 2, player_dismissed: 'kumar' },
    { bowler: 'bumra', number_of_dismissed: 2, player_dismissed: 'umesh' },
  ]);
});
