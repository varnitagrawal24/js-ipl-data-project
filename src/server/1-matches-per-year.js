const fs = require('fs');

function matchesPerYear(matches) {
    const result = {}
    for (let game of matches) {
        if (result[game.season]) {
            result[game.season] = result[game.season] + 1;
        } else {
            result[game.season] = 1;
        }
    }
    const data = JSON.stringify(result);
    fs.writeFile("./src/public/output/matchesPerYear.json", data, (error) => {
        if (error) {
            console.error(error);
            throw error;
        }
    });
}

module.exports = matchesPerYear;
