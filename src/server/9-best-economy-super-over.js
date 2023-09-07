/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
function bestEconomyBowlerInSuperOver(matches, deliveries) {
  const superOverDelivery = deliveries.filter((delivery) => {
    return delivery.is_super_over == '1';
  });

  const playerBowles = superOverDelivery.reduce((acc, delivery) => {
    if (acc[delivery.bowler]) {
      acc[delivery.bowler] += 1;
    } else {
      acc[delivery.bowler] = 1;
    }
    return acc;
  }, {});

  const playerRun = superOverDelivery.reduce((acc, delivery) => {
    if (acc[delivery.bowler]) {
      acc[delivery.bowler] += Number(delivery.total_runs);
    } else {
      acc[delivery.bowler] = Number(delivery.total_runs);
    }
    return acc;
  }, {});

  const bowlerEconomy = Object.keys(playerRun).reduce((acc, bowler) => {
    acc[bowler] = (playerRun[bowler] / playerBowles[bowler]) * 6;
    return acc;
  }, {});

  const sortedBowlerEconomy = Object.entries(bowlerEconomy).sort(
    (first, second) => {
      return first[1] - second[1];
    },
  );

  const result = {
    player: sortedBowlerEconomy[0][0],
    economy: sortedBowlerEconomy[0][1],
  };

  return result;
}
module.exports = bestEconomyBowlerInSuperOver;
