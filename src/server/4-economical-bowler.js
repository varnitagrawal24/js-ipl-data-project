function topEconomicalBowlers(matches, deliveries) {
  const matchId2015 = matches
    .filter((match) => {
      return Number(match.season) == 2015;
    })
    .map((match) => {
      return match.id;
    });

  const delivery2015 = deliveries.filter((delivery) => {
    return matchId2015.includes(delivery.match_id);
  });

  const bowlerRuns = delivery2015.reduce((acc, delivery) => {
    if (acc[delivery.bowler]) {
      acc[delivery.bowler] += Number(delivery.total_runs);
    } else {
      acc[delivery.bowler] = Number(delivery.total_runs);
    }
    return acc;
  }, {});

  const bowlerDelivery = delivery2015.reduce((acc, delivery) => {
    if (acc[delivery.bowler]) {
      acc[delivery.bowler] += 1;
    } else {
      acc[delivery.bowler] = 1;
    }
    return acc;
  }, {});

  const bowlerEconomy = Object.keys(bowlerRuns).reduce((acc, bowler) => {
    acc[bowler] = bowlerRuns[bowler] / bowlerDelivery[bowler];
    return acc;
  }, {});

  const sortedBowlerEconomy = Object.entries(bowlerEconomy).sort(
    (first, second) => {
      return first[1] - second[1];
    },
  );

  const result = [];

  for (let i = 0; i < 10; i++) {
    result.push({
      bowler: sortedBowlerEconomy[i][0],
      Economy: sortedBowlerEconomy[i][1] * 6,
    });
  }

  return result;
}

module.exports = topEconomicalBowlers;
