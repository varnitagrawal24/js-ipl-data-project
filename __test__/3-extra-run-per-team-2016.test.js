/* eslint-disable no-undef */
const extraRunsPerTeam = require('../src/server/3-extra-run-per-team-2016.js');

const matchSample = [
  {
    id: 1,
    season: 2016,
  },
  {
    id: 2,
    season: 2016,
  },
  {
    id: 3,
    season: 2016,
  },
  {
    id: 4,
    season: 2016,
  },
];

const deliverySample = [
  {
    match_id: 1,
    extra_runs: 1,
    bowling_team: 'chk',
  },
  {
    match_id: 1,
    extra_runs: 0,
    bowling_team: 'mi',
  },
  {
    match_id: 2,
    extra_runs: 1,
    bowling_team: 'kkr',
  },
  {
    match_id: 2,
    extra_runs: 1,
    bowling_team: 'chk',
  },
  {
    match_id: 3,
    extra_runs: 0,
    bowling_team: 'mi',
  },
  {
    match_id: 4,
    extra_runs: 1,
    bowling_team: 'kkr',
  },
];

test('extra run per team working fine', () => {
  expect(extraRunsPerTeam(matchSample, deliverySample)).toMatchObject({
    chk: 2,
    mi: 0,
    kkr: 2,
  });
});
