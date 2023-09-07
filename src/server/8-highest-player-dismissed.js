function highestPlayerDismissed(_matches, deliveries) {
  const playerDismissed = deliveries
    .filter((delivery) => {
      return delivery.player_dismissed != '';
    })
    .reduce((acc, delivery) => {
      const pairedPlayer=acc.find((item)=>{
        return(item.player_dismissed===delivery.player_dismissed && item.bowler===delivery.bowler)
      })
      if(pairedPlayer){
        const pairedPlayerIndex=acc.indexOf(pairedPlayer);
        acc[pairedPlayerIndex].number_of_dismissed += 1;
      }else{
        acc.push({
          player_dismissed:delivery.player_dismissed,
          bowler:delivery.bowler,
          number_of_dismissed:1
        })
      }
      return acc;
    }, []);

  const sortedPlayerDismissed = playerDismissed.sort((first, second) => {
    return second.number_of_dismissed - first.number_of_dismissed;
  });

  const temp=sortedPlayerDismissed[0].number_of_dismissed;
  const result=[];

  for(let item of sortedPlayerDismissed){
    if(item.number_of_dismissed===temp){
      result.push(item)
    }else{
      break
    }
  }
  
  return result;

}
module.exports = highestPlayerDismissed;
