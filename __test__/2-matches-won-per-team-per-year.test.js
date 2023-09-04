const matchesWonPerYear = require('../src/server/2-matches-won-per-team-per-year.js');

const sample=[
    {season:2008,winner:'chk'},
    {season:2017,winner:'rbc'},
    {season:2015,winner:'mi'},
    {season:2016,winner:'mi'},
    {season:2017,winner:'mi'},
    {season:2008,winner:'chk'},
    ];

    test('match won per team per year working fine', () => {
        expect(matchesWonPerYear(sample,)).toMatchObject({
            "2008":{
                chk:2
            },
            "2015":{
                mi:1
            },
            "2016":{
                mi:1
            },
            "2017":{
                rbc:1,
                mi:1
            },
        });
      });