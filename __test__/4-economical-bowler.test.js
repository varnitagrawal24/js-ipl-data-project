const topEconomyBowlers = require('../src/server/4-economical-bowler.js')

const matchSample = [
    { id: 1, season: '2015' },
    { id: 2, season: '2015' },
    { id: 3, season: '2015' },
    { id: 4, season: '2015' },
    { id: 5, season: '2015' },
    { id: 6, season: '2015' },
    { id: 7, season: '2015' },
    { id: 8, season: '2015' },
  ];
  
  const deliverySample = [
    { match_id: 1, bowler: 'kumar', total_runs: '1', wide_runs: '0' },
    { match_id: 1, bowler: 'umesh', total_runs: '2', wide_runs: '0' },
    { match_id: 2, bowler: 'ishant', total_runs: '3', wide_runs: '0' },
    { match_id: 2, bowler: 'nehra', total_runs: '4', wide_runs: '0' },
    { match_id: 3, bowler: 'starc', total_runs: '4', wide_runs: '0' },
    { match_id: 3, bowler: 'suresh', total_runs: '3', wide_runs: '0' },
    { match_id: 4, bowler: 'ashwin', total_runs: '4', wide_runs: '0' },
    { match_id: 4, bowler: 'jadeja', total_runs: '4', wide_runs: '0' },
    { match_id: 5, bowler: 'thakur', total_runs: '1', wide_runs: '0' },
    { match_id: 5, bowler: 'ishan', total_runs: '2', wide_runs: '0' },
    { match_id: 6, bowler: 'kumar', total_runs: '4', wide_runs: '0' },
    { match_id: 6, bowler: 'shami', total_runs: '4', wide_runs: '0' },
    { match_id: 7, bowler: 'umesh', total_runs: '3', wide_runs: '0' },
    { match_id: 7, bowler: 'ishant', total_runs: '1', wide_runs: '0' },
    { match_id: 7, bowler: 'umesh', total_runs: '2', wide_runs: '0' },
    { match_id: 8, bowler: 'kumar', total_runs: '3', wide_runs: '0' },
    { match_id: 8, bowler: 'shami', total_runs: '2', wide_runs: '0' },
    { match_id: 8, bowler: 'umesh', total_runs: '1', wide_runs: '0' },
    { match_id: 8, bowler: 'ishant', total_runs: '1', wide_runs: '0' },
  ];

  test('top 10 economical bowlers working fine', () => {
    expect(topEconomyBowlers(matchSample,deliverySample)).toMatchObject([
        { bowler: 'thakur', Economy: 1 },
        { bowler: 'ishant', Economy: 1.6666666666666667 },
        { bowler: 'umesh', Economy: 2 },
        { bowler: 'ishan', Economy: 2 },
        { bowler: 'kumar', Economy: 2.6666666666666665 },
        { bowler: 'suresh', Economy: 3 },
        { bowler: 'shami', Economy: 3 },
        { bowler: 'nehra', Economy: 4 },
        { bowler: 'starc', Economy: 4 },
        { bowler: 'ashwin', Economy: 4 }
      ]);
  });