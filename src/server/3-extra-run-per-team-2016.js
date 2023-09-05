function extraRunsPerTeam(matches, deliveries) {

    const matchID_2016 = matches.filter((match) => {
        return match.season == 2016;
    })
        .map((match) => {
            return match.id;
        });

    const deliveryOfmatch_2016 = deliveries.filter((delivery) => {
        return matchID_2016.includes(delivery.match_id)
    })

    const result = deliveryOfmatch_2016.reduce((acc, delivery) => {
        if (acc[delivery.bowling_team]) {
            acc[delivery.bowling_team] += Number(delivery.extra_runs);
        } else {
            acc[delivery.bowling_team] = Number(delivery.extra_runs);
        }
        return acc;
    }, {});

    return result;
}

module.exports = extraRunsPerTeam;