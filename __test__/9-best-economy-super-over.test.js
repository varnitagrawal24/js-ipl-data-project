/* eslint-disable no-undef */
const bestEconomyBowlerInSuperOver = require('../src/server/9-best-economy-super-over.js');

const sample = [
  {
    is_super_over: '1',
    bowler: 'kumar',
    total_runs: '1',
  },
  {
    is_super_over: '1',
    bowler: 'umesh',
    total_runs: '2',
  },
  {
    is_super_over: '1',
    bowler: 'ishant',
    total_runs: '3',
  },
  {
    is_super_over: '1',
    bowler: 'nehra',
    total_runs: '4',
  },
  {
    is_super_over: '1',
    bowler: 'starc',
    total_runs: '4',
  },
  {
    is_super_over: '1',
    bowler: 'suresh',
    total_runs: '3',
  },
  {
    is_super_over: '1',
    bowler: 'ashwin',
    total_runs: '4',
  },
  {
    is_super_over: '1',
    bowler: 'jadeja',
    total_runs: '4',
  },
  {
    is_super_over: '1',
    bowler: 'thakur',
    total_runs: '1',
  },
  {
    is_super_over: '1',
    bowler: 'ishan',
    total_runs: '2',
  },
  {
    is_super_over: '1',
    bowler: 'kumar',
    total_runs: '4',
  },
  {
    is_super_over: '1',
    bowler: 'shami',
    total_runs: '4',
  },
  {
    is_super_over: '1',
    bowler: 'umesh',
    total_runs: '3',
  },
  {
    is_super_over: '1',
    bowler: 'ishant',
    total_runs: '1',
  },
  {
    is_super_over: '1',
    bowler: 'umesh',
    total_runs: '2',
  },
  {
    is_super_over: '1',
    bowler: 'kumar',
    total_runs: '3',
  },
  {
    is_super_over: '1',
    bowler: 'shami',
    total_runs: '2',
  },
  {
    is_super_over: '1',
    bowler: 'umesh',
    total_runs: '1',
  },
  {
    is_super_over: '1',
    bowler: 'ishant',
    total_runs: '1',
  },
  {
    is_super_over: '1',
    bowler: 'dinda',
    total_runs: '1',
  },
];

test('best economy in super over working fine', () => {
  expect(bestEconomyBowlerInSuperOver([], sample)).toMatchObject([
    { economy: 6, player: 'thakur' },
    { economy: 6, player: 'dinda' },
  ]);
});
