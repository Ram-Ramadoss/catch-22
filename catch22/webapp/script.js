async function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Raised');
  data.addColumn('number', 'Money (USD)');
  data.addRows([
    ['Uber', 1023984],
    ['Lyft',123182],
    ['DoorDash', 1231234]
  ]);

  var chart = new google.visualization.BarChart(document.getElementById('myBarChart'));
  chart.draw(data, null);    
}
