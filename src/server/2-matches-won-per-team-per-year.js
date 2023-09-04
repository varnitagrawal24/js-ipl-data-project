const fs = require('fs');

function matchesWonPerTeamPerYear(matches) {
    const result = {}
    for (let game of matches) {
        if (result[game.season] && result[game.season][game.winner]) {
            result[game.season][game.winner] = result[game.season][game.winner] + 1;
        } else {
            if (result[game.season]) {
                result[game.season][game.winner] = 1;
            }
            else {
                result[game.season] = {};
            }


        }
    }
    const data = JSON.stringify(result);
    fs.writeFile("./src/public/output/matchesWonPerTeamPerYear.json", data, (error) => {
        if (error) {
            console.error(error);
            throw error;
        }
    });
}

module.exports = matchesWonPerTeamPerYear;