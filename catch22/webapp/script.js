async function drawChart() { 
 	 var data = new google.visualization.DataTable();
 	 data.addColumn('string', 'Campaign');
 	 data.addColumn('number', '# of Contributors');
 	 data.addColumn({type:'string', role:'style'});
 	 data.addRows([
 	 	 ['YES',5,'#c5e6a6'],
 	 	 ['NO ',54,'#F7B1AB']
 	 ]);
 	 var options = {title:'Number of Funders',
 	 	 width:350,
		 height:300,
		 legend:'none',
		 hAxis:{textStyle:{fontName: "Montserrat",fontSize:20}},
		 vAxis:{textStyle:{fontName: "Montserrat",fontSize:20}},
		 titleTextStyle: {fontName: "Gugi",fontSize:20},
		 colors:['#c5e6a6','#F7B1AB'],
		 pieHole: 0,
		 pieSliceTextStyle: {fontName: "Montserrat",fontSize:15,color: 'white'}
		};
 	 var chart = new google.visualization.PieChart(document.getElementById('theContributors'));
 	 chart.draw(data, options);
 }

async function drawChart2() { 
 	 var data = new google.visualization.DataTable();
 	 data.addColumn('string', 'Campaign');
 	 data.addColumn('number', 'Funds raised');
 	 data.addColumn({type:'string', role:'style'});
 	 data.addRows([
 	 	 ['YES',295793679.34,'#c5e6a6'],
 	 	 ['NO ',12822032.69,'#F7B1AB']
 	 ]);
 	 var options = {title:'Total Contributions ($)',
		 width:350,
		 height:300,
		 legend:'none',
		 hAxis:{
		 	textStyle:{fontName: "Montserrat",fontSize:20},format: 'short'},
		 vAxis:{textStyle:{fontName: "Montserrat",fontSize:20}},
		 titleTextStyle: {fontName: "Gugi",fontSize:20}
		};
 	 var chart = new google.visualization.BarChart(document.getElementById('theMoney'));
 	 chart.draw(data, options);
 }

async function drawChart3() { 
 	 var data = new google.visualization.DataTable();
 	 data.addColumn('string', 'Campaign');
 	 data.addColumn('number', '# of Endorsers');
 	 data.addColumn({type:'string', role:'style'});
 	 data.addRows([
 	 	 ['YES',107,'#c5e6a6'],
 	 	 ['NO ',212,'#F7B1AB']
 	 ]);
 	 var options = {title:'Number of Endorsers',
 	 	 width:350,
		 height:300,
		 legend:'none',
		 hAxis:{textStyle:{fontName: "Montserrat",fontSize:20}},
		 vAxis:{textStyle:{fontName: "Montserrat",fontSize:20}},
		 titleTextStyle: {fontName: "Gugi",fontSize:20},
		 colors:['#c5e6a6','#F7B1AB'],
		 pieHole: 0,
		 pieSliceTextStyle: {fontName: "Montserrat",fontSize:15,color: 'white'}
		};
 	 var chart = new google.visualization.PieChart(document.getElementById('theCoalition'));
 	 chart.draw(data, options);
 }

async function drawTimeline() { 
 	 var data = new google.visualization.DataTable();
 	 data.addColumn('date', 'Date');
 	 data.addColumn('number', 'Contribution amount');
 	 data.addRows([
 	 	 [new Date(2019,9,28),80000000.0], 
[new Date(2019,9,29),20000000.0], 
[new Date(2019,9,30),120000000.0], 
[new Date(2019,9,31),57045.24], 
[new Date(2019,10,7),750.0], 
[new Date(2019,10,19),382639.08], 
[new Date(2019,10,30),57684.6], 
[new Date(2019,11,19),450.0], 
[new Date(2019,11,31),135730.64], 
[new Date(2020,0,2),24800.0], 
[new Date(2020,0,14),2538.3], 
[new Date(2020,0,31),160746.72], 
[new Date(2020,1,1),32014.880000000005], 
[new Date(2020,1,25),22140.0], 
[new Date(2020,1,28),90244.98], 
[new Date(2020,1,29),50000.0], 
[new Date(2020,2,1),102127.84], 
[new Date(2020,2,17),43920.0], 
[new Date(2020,3,1),105307.32], 
[new Date(2020,4,1),67751.08], 
[new Date(2020,5,1),74866.96], 
[new Date(2020,5,17),666.67], 
[new Date(2020,6,1),68071.62], 
[new Date(2020,7,1),227820.43], 
[new Date(2020,7,11),10158.66], 
[new Date(2020,7,13),157708.33000000002], 
[new Date(2020,7,19),116900.48000000001], 
[new Date(2020,7,26),7474.77], 
[new Date(2020,7,31),5571.38], 
[new Date(2020,8,1),218754.54], 
[new Date(2020,8,4),70000000.0], 
[new Date(2020,8,10),849750.39], 
[new Date(2020,8,12),560523.87], 
[new Date(2020,8,14),2547.14], 
[new Date(2020,8,15),6811.2], 
[new Date(2020,8,16),62456.54], 
[new Date(2020,8,17),1314000.0], 
[new Date(2020,8,18),2924.91], 
[new Date(2020,8,22),14780.77], 
[new Date(2020,8,25),756000.0]
 	 ]);
 	 var options = {title:'Contributions over time',
 	 	 width:750,
		 height:300,
		 legend:'none',
		 hAxis:{textStyle:{fontName: "Montserrat",fontSize:20}},
		 vAxis:{textStyle:{fontName: "Montserrat",fontSize:20},format: 'short'},
		 titleTextStyle: {fontName: "Gugi",fontSize:20},
		 backgroundColor: 'none',
		};
 	 var chart = new google.visualization.LineChart(document.getElementById('theTimeline'));
 	 chart.draw(data, options);
 }