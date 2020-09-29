async function drawChart() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Campaign');
	data.addColumn('number', 'Number of Contributors');
	data.addRows([
		['NO ',54],
		['YES',5]
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