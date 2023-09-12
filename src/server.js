const http=require("http");
const fs=require("fs");

const readFile=(filePath,cb)=>{
    fs.readFile(filePath,(err,data)=>{
        if(err){
            console.error(err);
        }else{
            cb(data);
        }
    })
}

const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("<h1>HOME</h1>")
    }else if(req.url==="/data/1"){
        readFile("./public/output/1-matchesPerYear.json",(data)=>{
            res.end(data);
        })
    }else if(req.url==="/data/2"){
        readFile("./public/output/2-matchesWonPerTeamPerYear.json",(data)=>{
            res.end(data);
        })
    }else if(req.url==="/data/3"){
        readFile("./public/output/3-extraRunsPerTeam.json",(data)=>{
            res.end(data);
        })
    }else if(req.url==="/data/4"){
        readFile("./public/output/4-top10EconomicalBowlers.json",(data)=>{
            res.end(data);
        })
    }else if(req.url==="/data/5"){
        readFile("./public/output/5-teamWinMatchesAndToss.json",(data)=>{
            res.end(data);
        })
    }else if(req.url==="/data/6"){
        readFile("./public/output/6-highestPlayerOfMatchPerSeason.json",(data)=>{
            res.end(data);
        })
    }else if(req.url==="/data/7"){
        readFile("./public/output/7-strikeRateOfBatsman.json",(data)=>{
            res.end(data);
        })
    }else if(req.url==="/data/8"){
        readFile("./public/output/8-highestPlayerDismissed.json",(data)=>{
            res.end(data);
        })
    }else if(req.url==="/data/9"){
        readFile("./public/output/9-bestEconomyBowlerInSuperOver.json",(data)=>{
            res.end(data);
        })
    }
})

server.listen(3000,()=>{
    console.log("server is working on 3000 port.......");
})