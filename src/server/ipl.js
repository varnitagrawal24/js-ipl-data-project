/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const chart1= async ()=>{
    const res=await fetch("http://localhost:3000/data/1");
    const data=await res.json();

    const columnName=Object.keys(data);
    const columnData=Object.values(data);

    Highcharts.chart('chart-1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Number of matches played per year for all the years'
        },
        xAxis: {
            categories: columnName,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total Matches'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Matches played per year',
            data: columnData
    
        }]
    });
}
chart1();

const chart2= async ()=>{
    const res=await fetch("http://localhost:3000/data/2");
    const data=await res.json();

    const columnName=Object.keys(data);
    const teams=new Set();
    const dataValue=Object.values(data);
    dataValue.forEach((item)=>{
        Object.keys(item).forEach((team)=>{
            if(team) teams.add(team);
        })
    });
    const columnData=[...teams].reduce((acc,team)=>{
        const teamData=[];
        dataValue.forEach((item)=>{
            if(item[team]){
                teamData.push(item[team]);
            }else{
                teamData.push(0);
            }
        })
        acc.push({
            name:team,
            data:teamData
        })
        return acc;
    },[])


    Highcharts.chart('chart-2', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Number of matches won per team per year'
        },
        xAxis: {
            categories: columnName,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Matches won per year'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: columnData
    });
}
chart2();

const chart3= async ()=>{
    const res=await fetch("http://localhost:3000/data/3");
    const data=await res.json();

    const columnName=Object.keys(data);
    const columnData=Object.values(data);

    Highcharts.chart('chart-3', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Extra runs conceded per team in the year 2016'
        },
        xAxis: {
            categories: columnName,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Extra runs'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Extra Runs per team',
            data: columnData
    
        }]
    });
}
chart3();

const chart4= async ()=>{
    const res=await fetch("http://localhost:3000/data/4");
    const data=await res.json();

    const columnName=data.map((item)=>{
        return item.bowler;
    });
    const columnData=data.map((item)=>{

        return (item.Economy);
    });


    Highcharts.chart('chart-4', {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Top 10 economical bowlers in the year 2015'
        },
        xAxis: {
            categories: columnName,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Economy'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Economy of a player',
            data: columnData
        }]
    });
}
chart4();

const chart5= async ()=>{
    const res=await fetch("http://localhost:3000/data/5");
    const data=await res.json();

    const columnName=Object.keys(data);
    const columnData=Object.values(data);


    Highcharts.chart('chart-5', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'The number of times each team won the toss and also won the match'
        },
        xAxis: {
            categories: columnName,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Match & Toss Win'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Number of matches & toss win',
            data: columnData
        }]
    });
}
chart5();

const chart6= async ()=>{
    const res=await fetch("http://localhost:3000/data/6");
    const data=await res.json();
    

    var chartData = data.map(function(entry) {
        return {
            name: entry.season,
            y: entry.player.length,
            players: entry.player.join(", ") 
        };
    });

    // Create the Highcharts chart
    Highcharts.chart('chart-6', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Players who has won the highest number of Player of the Match awards for each season'
        },
        xAxis: {
            type: 'category',
            title: {
                text: 'Season'
            }
        },
        yAxis: {
            title: {
                text: 'Number of Players'
            }
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.players}'
                }
            }
        },
        series: [{
            name: 'Players',
            data: chartData
        }]
    });
}
chart6();

const chart8= async ()=>{
    const res=await fetch("http://localhost:3000/data/8");
    const data=await res.json();

    const columnName=data.map((item)=>{
        return `${item.player_dismissed}-${item.bowler}`;
    });
    const columnData=data.map((item)=>{
        return item.number_of_dismissed;
    });


    Highcharts.chart('chart-8', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'The highest number of times one player has been dismissed by another player'
        },
        xAxis: {
            categories: columnName,
            crosshair: true,
            title: {
                text: 'Pair'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of dismissial'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Number of dismissial by pair',
            data: columnData
        }]
    });
}
chart8();

const chart9= async ()=>{
    const res=await fetch("http://localhost:3000/data/9");
    const data=await res.json();

    const columnName=data.map((item)=>{
        return item.player;
    });
    const columnData=data.map((item)=>{
        return item.economy;
    });


    Highcharts.chart('chart-9', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'The bowler with the best economy in super overs'
        },
        xAxis: {
            categories: columnName,
            crosshair: true,
            title: {
                text: 'Player'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Economy in super over'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Economy',
            data: columnData
        }]
    });
}
chart9();