const matchesPerYear = require('../src/server/1-matches-per-year.js');

const sample=[
    {season:2008},
    {season:2017},
    {season:2015},
    {season:2016},
    {season:2017},
    {season:2008},
    ];

test('match per year working fine', () => {
    expect(matchesPerYear(sample,)).toMatchObject({
        "2008":2,
        "2015":1,
        "2016":1,
        "2017":2,
    });
  });