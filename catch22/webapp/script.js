async function drawChart() { 
 	var data = new google.visualization.DataTable();
 	data.addColumn('string', 'Campaign');
 	data.addColumn('number', '# of Contributors');
 	data.addColumn({type:'string', role:'style'});
 	data.addRows([
 		['YES',5,'#c5e6a6'],
 	 	['NO ',54,'#F7B1AB']
 	]);
 	var options = {title:'# Of Funding Sources',
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

async function drawYesTimeline() { 
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
		hAxis:{textStyle:{fontName: "Montserrat",fontSize:20,color: "#FEF7DB"},gridlines: {color: "#FEF7DB"},minorGridlines: {color: "#c5e6a6"},baselineColor: '#c5e6a6'},
		vAxis:{textStyle:{fontName: "Montserrat",fontSize:20,color: "#FEF7DB"},gridlines: {color: "#FEF7DB"},minorGridlines: {color: "#c5e6a6"},baselineColor: '#c5e6a6',format: 'short',scaleType:'log'},
		titleTextStyle: {fontName: "Gugi",fontSize:20,color: "#c5e6a6"},
		lineWidth: 3,
		backgroundColor: 'none',colors: ['#FEF7DB']
		};
 	var chart = new google.visualization.AreaChart(document.getElementById('theYesTimeline'));
 	chart.draw(data, options);
}

async function drawNoTimeline() { 
 	var data = new google.visualization.DataTable();
 	data.addColumn('date', 'Date');
 	data.addColumn('number', 'Contribution amount');
 	data.addRows([
[new Date(2020,1,3),100000.0], 
[new Date(2020,1,14),12000.0], 
[new Date(2020,1,18),20500.0], 
[new Date(2020,2,24),2500.0], 
[new Date(2020,3,3),170000.0], 
[new Date(2020,3,17),900000.0], 
[new Date(2020,4,5),20000.0], 
[new Date(2020,4,13),155700.0], 
[new Date(2020,4,31),1311.69], 
[new Date(2020,5,3),20000.0], 
[new Date(2020,5,25),200000.0], 
[new Date(2020,5,26),20000.0], 
[new Date(2020,5,30),102428.93], 
[new Date(2020,6,13),25000.0], 
[new Date(2020,6,24),10000.0], 
[new Date(2020,6,30),250000.0], 
[new Date(2020,7,3),15000.0], 
[new Date(2020,7,5),450000.0], 
[new Date(2020,7,14),250000.0], 
[new Date(2020,7,20),85000.0], 
[new Date(2020,7,21),1560000.0], 
[new Date(2020,7,24),250000.0], 
[new Date(2020,7,26),2500.0], 
[new Date(2020,7,27),1000000.0], 
[new Date(2020,7,28),7772.67], 
[new Date(2020,7,31),115590.0], 
[new Date(2020,8,1),20000.0], 
[new Date(2020,8,2),1256.01], 
[new Date(2020,8,4),425000.0], 
[new Date(2020,8,8),1129000.0], 
[new Date(2020,8,10),1004000.0], 
[new Date(2020,8,11),1303496.62], 
[new Date(2020,8,14),655000.0], 
[new Date(2020,8,15),101025.0], 
[new Date(2020,8,16),491000.0], 
[new Date(2020,8,17),85.0], 
[new Date(2020,8,19),54.769999999999996], 
[new Date(2020,8,21),25812.0], 
[new Date(2020,8,22),546000.0], 
[new Date(2020,8,23),375000.0], 
[new Date(2020,8,24),1000000.0]
 	]);
 	var options = {title:'Contributions over time',
 	 	width:750,
		height:300,
		legend:'none',
		hAxis:{textStyle:{fontName: "Montserrat",fontSize:20,color: "#FEF7DB"},gridlines: {color: "#FEF7DB"},minorGridlines: {color: "#F7B1AB"},baselineColor: '#F7B1AB'},
		vAxis:{textStyle:{fontName: "Montserrat",fontSize:20,color: "#FEF7DB"},gridlines: {color: "#FEF7DB"},minorGridlines: {color: "#F7B1AB"},baselineColor: '#F7B1AB',format: 'short',scaleType:'none'},
		titleTextStyle: {fontName: "Gugi",fontSize:20,color: "#F7B1AB"},
		lineWidth: 3,
		backgroundColor: 'none',
		colors: ['#FEF7DB']
		};
 	var chart = new google.visualization.AreaChart(document.getElementById('theNoTimeline'));
 	chart.draw(data, options);
}