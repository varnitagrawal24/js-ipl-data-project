const strikeRateOfBatsman = require('../src/server/7-strike-rate-of-batsman.js');


const matcheSample = [
    { id: 1, season: '2015' },
    { id: 2, season: '2015' },
    { id: 3, season: '2015' },
    { id: 4, season: '2016' },
    { id: 5, season: '2016' },
    { id: 6, season: '2016' },
    { id: 7, season: '2016' },
    { id: 8, season: '2016' },
  ];

  const deliverySample = [
    { match_id: 1, batsman: 'kumar', batsman_runs: '1'},
    { match_id: 1, batsman: 'umesh', batsman_runs: '2'},
    { match_id: 2, batsman: 'ishant', batsman_runs: '3'},
    { match_id: 2, batsman: 'nehra', batsman_runs: '4'},
    { match_id: 3, batsman: 'starc', batsman_runs: '4'},
    { match_id: 3, batsman: 'suresh', batsman_runs: '3'},
    { match_id: 4, batsman: 'ashwin', batsman_runs: '4' },
    { match_id: 4, batsman: 'jadeja', batsman_runs: '4' },
    { match_id: 5, batsman: 'thakur', batsman_runs: '1' },
    { match_id: 5, batsman: 'ishan', batsman_runs: '2' },
    { match_id: 6, batsman: 'kumar', batsman_runs: '4' },
    { match_id: 6, batsman: 'shami', batsman_runs: '4' },
    { match_id: 7, batsman: 'umesh', batsman_runs: '3' },
    { match_id: 7, batsman: 'ishant', batsman_runs: '1' },
    { match_id: 7, batsman: 'umesh', batsman_runs: '2' },
    { match_id: 8, batsman: 'kumar', batsman_runs: '3' },
    { match_id: 8, batsman: 'shami', batsman_runs: '2' },
    { match_id: 8, batsman: 'umesh', batsman_runs: '1' },
    { match_id: 8, batsman: 'ishant', batsman_runs: '1' },
  ];


test('strike rate of player per season working fine', () => {
    expect(strikeRateOfBatsman(matcheSample,deliverySample)).toMatchObject({
        '2015': [
          { player: 'kumar', strike_rate: 100 },
          { player: 'umesh', strike_rate: 200 },
          { player: 'ishant', strike_rate: 300 },
          { player: 'nehra', strike_rate: 400 },
          { player: 'starc', strike_rate: 400 },
          { player: 'suresh', strike_rate: 300 }
        ],
        '2016': [
          { player: 'ashwin', strike_rate: 400 },
          { player: 'jadeja', strike_rate: 400 },
          { player: 'thakur', strike_rate: 100 },
          { player: 'ishan', strike_rate: 200 },
          { player: 'kumar', strike_rate: 350 },
          { player: 'shami', strike_rate: 300 },
          { player: 'umesh', strike_rate: 200 },
          { player: 'ishant', strike_rate: 100 }
        ]
      });
});