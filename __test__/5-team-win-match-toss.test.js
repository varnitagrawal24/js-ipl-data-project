/* eslint-disable no-undef */
const teamWinMatchesAndToss = require('../src/server/5-team-win-match-toss.js');

const sample = [
  {
    winner: 'chk',
    toss_winner: 'chk',
  },
  {
    winner: 'chk',
    toss_winner: 'rcb',
  },
  {
    winner: 'rcb',
    toss_winner: 'rcb',
  },
  {
    winner: 'mi',
    toss_winner: 'mi',
  },
  {
    winner: 'chk',
    toss_winner: 'mi',
  },
];

test('team win matches and toss working fine', () => {
  expect(teamWinMatchesAndToss(sample, [])).toMatchObject({
    chk: 1,
    rcb: 1,
    mi: 1,
  });
});
