/* eslint-disable no-undef */
const highestPlayerDismissed = require('../src/server/8-highest-player-dismissed.js');

const sample = [
  { player_dismissed: 'kumar' },
  { player_dismissed: 'umesh' },
  { player_dismissed: 'ishant' },
  { player_dismissed: 'umesh' },
  { player_dismissed: 'starc' },
  { player_dismissed: 'kumar' },
  { player_dismissed: 'ashwin' },
  { player_dismissed: 'jadeja' },
  { player_dismissed: 'thakur' },
  { player_dismissed: 'ishan' },
  { player_dismissed: 'kumar' },
  { player_dismissed: 'shami' },
  { player_dismissed: 'umesh' },
  { player_dismissed: 'ishant' },
  { player_dismissed: 'umesh' },
  { player_dismissed: 'kumar' },
  { player_dismissed: 'shami' },
  { player_dismissed: 'umesh' },
  { player_dismissed: 'ishant' },
];

test('highest player of dimissed working fine', () => {
  expect(highestPlayerDismissed([], sample)).toMatchObject({
    player: 'umesh',
    number_of_dismissed: 5,
  });
});
