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
        readFile("./src/public/index.html",(data)=>{
            res.end(data);
        })
    }else if(req.url==="/data/1"){
        readFile("./src/public/output/1-matchesPerYear.json",(data)=>{
            res.end(data);
        })
    }else if(req.url==="/data/2"){
        readFile("./src/public/output/2-matchesWonPerTeamPerYear.json",(data)=>{
            res.end(data);
        })
    }else if(req.url==="/data/3"){
        readFile("./src/public/output/3-extraRunsPerTeam.json",(data)=>{
            res.end(data);
        })
    }else if(req.url==="/data/4"){
        readFile("./src/public/output/4-top10EconomicalBowlers.json",(data)=>{
            res.end(data);
        })
    }else if(req.url==="/data/5"){
        readFile("./src/public/output/5-teamWinMatchesAndToss.json",(data)=>{
            res.end(data);
        })
    }else if(req.url==="/data/6"){
        readFile("./src/public/output/6-highestPlayerOfMatchPerSeason.json",(data)=>{
            res.end(data);
        })
    }else if(req.url==="/data/7"){
        readFile("./src/public/output/7-strikeRateOfBatsman.json",(data)=>{
            res.end(data);
        })
    }else if(req.url==="/data/8"){
        readFile("./src/public/output/8-highestPlayerDismissed.json",(data)=>{
            res.end(data);
        })
    }else if(req.url==="/data/9"){
        readFile("./src/public/output/9-bestEconomyBowlerInSuperOver.json",(data)=>{
            res.end(data);
        })
    }else{
        fs.createReadStream("./src/server/ipl.js").pipe(res);
    }
})

server.listen(3000,()=>{
    console.log("server is working on 3000 port.......");
})