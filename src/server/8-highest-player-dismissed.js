function highestPlayerDismissed(matches,deliveries){
    const playerDismissed=deliveries.filter((delivery)=>{
        return delivery.player_dismissed!='';
    })
    .reduce((acc,delivery)=>{
        if(acc[delivery.player_dismissed]){
            acc[delivery.player_dismissed]+=1;
        }else{
            acc[delivery.player_dismissed]=1;
        }
        return acc;
    },{})

    const sorted=Object.entries(playerDismissed).sort((first,second)=>{
        return second[1]-first[1];
    });

    const result={
        player:sorted[0][0],
        number_of_dismissed:sorted[0][1]
    } 
    return result;
}
module.exports=highestPlayerDismissed;