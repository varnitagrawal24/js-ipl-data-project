function teamWinMatchesAndToss(matches, _deliveries) {
  const matchWin = matches.filter((match) => {
    return match.winner == match.toss_winner;
  });

  const result = matchWin.reduce((acc, match) => {
    if (acc[match.winner]) {
      acc[match.winner] += 1;
    } else {
      acc[match.winner] = 1;
    }
    return acc;
  }, {});

  return result;
}
module.exports = teamWinMatchesAndToss;
