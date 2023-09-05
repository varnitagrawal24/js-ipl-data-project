function highestPlayerOfMatchPerSeason(matches,deliveries){

    const result=[];
    const seasons=matches.reduce((acc,match)=>{
        if(!acc.includes(match.season)){
            acc.push(match.season);
        }
        return acc;
    },[]);

    seasons.forEach((season)=>{
        const playerOfMatchPerSeason=matches.filter((match)=>{
            return match.season==season;
        })
        .reduce((acc,match)=>{
            if(acc[match.player_of_match]){ 
                acc[match.player_of_match]+=1;
            }else{
                acc[match.player_of_match]=1;
            }
            return acc;
        },{});
        
        const sorted=Object.entries(playerOfMatchPerSeason).sort((first,second)=>{
            return second[1]-first[1];
        });
        
        result.push({
            season,
            player:sorted[0][0]
        });

    })


    return result;
}
module.exports=highestPlayerOfMatchPerSeason;