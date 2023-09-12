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