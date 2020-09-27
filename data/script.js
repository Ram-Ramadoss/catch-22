async function drawChart() { 
 	 var data = new google.visualization.DataTable();
 	 data.addColumn('string', 'Campaign');
 	 data.addColumn('number', 'Number of Contributors');
 	 data.addRows([
 	 	 ['NO ',54],
 	 	 ['YES',5]
 	 ]);
 	 var chart = new google.visualization.BarChart(document.getElementById('myBarChart'));
 	 chart.draw(data, null);
 }