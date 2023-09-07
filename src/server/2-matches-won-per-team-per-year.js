function matchesWonPerTeamPerYear(matches,_deliveries) {
  const result = {};
  for (const match of matches) {
    if (result[match.season] && result[match.season][match.winner]) {
      result[match.season][match.winner] =
        result[match.season][match.winner] + 1;
    } else {
      if (result[match.season]) {
        result[match.season][match.winner] = 1;
      } else {
        result[match.season] = {};
        result[match.season][match.winner] = 1;
      }
    }
  }
  return result;
}

module.exports = matchesWonPerTeamPerYear;
