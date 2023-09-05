function topEconomicalBowlers(matches, deliveries) {

    const matchID_2015 = matches.filter((match) => {
        return match.season == 2015;
    })
        .map((match) => {
            return match.id;
        });

    const delivery_2015= deliveries.filter((delivery)=>{
        return matchID_2015.includes(delivery.match_id);
    });

    const bowlerRuns = delivery_2015.reduce((acc, delivery) => {
        if (acc[delivery.bowler]) {
            acc[delivery.bowler] += Number(delivery.total_runs);
        } else {
            acc[delivery.bowler] = Number(delivery.total_runs);
        }
        return acc;
    }, {});

    const bowlerDelivery = delivery_2015.reduce((acc, delivery) => {
        if (acc[delivery.bowler]) {
            acc[delivery.bowler] += 1;
        } else {
            acc[delivery.bowler] = 1;
        }
        return acc;
    }, {});

    const bowlerEconomy=Object.keys(bowlerRuns).reduce((acc, bowler) => {
        acc[bowler]=bowlerRuns[bowler]/bowlerDelivery[bowler];
        return acc;
    }, {})

    const sortedBowlerEconomy=Object.entries(bowlerEconomy).sort((first,second)=>{
        return first[1]-second[1];
    });

    const result=[];

    for(let i=0;i<10;i++){
        result.push({
            bowler:sortedBowlerEconomy[i][0],
            Economy:sortedBowlerEconomy[i][1]*6
        })
    }

    return result;
}

module.exports = topEconomicalBowlers;