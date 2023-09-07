function strikeRateOfBatsman(matches, deliveries) {
  const result = {};
  const seasons = matches.reduce((acc, match) => {
    if (!acc.includes(match.season)) {
      acc.push(match.season);
    }
    return acc;
  }, []);

  seasons.forEach((season) => {
    const matchId = matches
      .filter((match) => {
        return match.season == season;
      })
      .map((match) => {
        return match.id;
      });
    const deliveryOfMatch = deliveries.filter((delivery) => {
      return matchId.includes(delivery.match_id);
    });
    const playerRuns = deliveryOfMatch.reduce((acc, delivery) => {
      if (acc[delivery.batsman]) {
        acc[delivery.batsman] += Number(delivery.batsman_runs);
      } else {
        acc[delivery.batsman] = Number(delivery.batsman_runs);
      }
      return acc;
    }, {});
    const playerball = deliveryOfMatch.reduce((acc, delivery) => {
      if (acc[delivery.batsman]) {
        acc[delivery.batsman] += 1;
      } else {
        acc[delivery.batsman] = 1;
      }
      return acc;
    }, {});
    const playerData = Object.keys(playerRuns).reduce((acc, player) => {
      acc.push({
        player,
        strike_rate: (playerRuns[player] / playerball[player]) * 100,
      });
      return acc;
    }, []);
    result[season] = playerData;
  });

  return result;
}
module.exports = strikeRateOfBatsman;
