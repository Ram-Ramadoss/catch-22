async function drawChart() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Campaign');
	data.addColumn('number', 'Number of Contributors');
	data.addRows([
		['YES',5],
		['NO ',54]
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
	data.addColumn('number', 'Number of Contributors');
	data.addColumn({type:'string', role:'style'});
	data.addRows([
		['YES',295793679.34000003, '#c5e6a6'],
		['NO ',12822032.69, '#F7B1AB']
	]);
		var options = {title:'Total Contributions ($)',
		width:350,
		height:300,
		legend:'none',
		hAxis:{textStyle:{fontName: "Montserrat",fontSize:20},format: 'short'},
		vAxis:{textStyle:{fontName: "Montserrat",fontSize:20}},
		titleTextStyle: {fontName: "Gugi",fontSize:20},
		colors:['#c5e6a6','#F7B1AB'],
		pieHole: 0,
		pieSliceTextStyle: {fontName: "Montserrat",fontSize:15,color: 'white'}
		};
	var chart = new google.visualization.BarChart(document.getElementById('theMoney'));
	chart.draw(data, options);
}async function drawChart3() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Campaign');
	data.addColumn('number', 'Number of Contributors');
	data.addRows([
		['YES',107],
		['NO ',212]
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