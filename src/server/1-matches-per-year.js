const fs = require('fs');

function matchesPerYear(matches,deliveries) {
    const result = {}
    for (let match of matches) {
        if (result[match.season]) {
            result[match.season] = result[match.season] + 1;
        } else {
            result[match.season] = 1;
        }
    }
    
    return result;
}

module.exports = matchesPerYear;
