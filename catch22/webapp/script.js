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
async function drawYesTimeline() {
	var data = new google.visualization.DataTable();
	data.addColumn('date', 'Date');
	data.addColumn('number', 'Daily Contributions $');
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
		[new Date(2020,8,25),756000.0],
	]);
		var options = {title:'Contributions Over Time ($)',
		width:650,
		height:300,
		legend:'none',
		hAxis:{textStyle:{fontName: "Montserrat",fontSize:20,color: "#FEF7DB"},gridlines: {color: "#FEF7DB"},minorGridlines: {color: "#c5e6a6"},baselineColor: '#c5e6a6'},
		vAxis:{textStyle:{fontName: "Montserrat",fontSize:20,color: "#FEF7DB"},gridlines: {color: "#FEF7DB"},minorGridlines: {color: "#c5e6a6"},baselineColor: '#c5e6a6',format: 'short',scaleType:'mirrorLog'},
		titleTextStyle: {fontName: "Gugi",fontSize:20,color: "#c5e6a6"},
		colors:['#FEF7DB'],
		backgroundColor: 'none',
		lineWidth: 3,
		};
	var chart = new google.visualization.AreaChart(document.getElementById('theYesTimeline'));
	chart.draw(data, options);
}
async function drawNoTimeline() {
	var data = new google.visualization.DataTable();
	data.addColumn('date', 'Date');
	data.addColumn('number', 'Daily Contributions $');
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
		[new Date(2020,8,24),1000000.0],
	]);
		var options = {title:'Contributions Over Time ($)',
		width:650,
		height:300,
		legend:'none',
		hAxis:{textStyle:{fontName: "Montserrat",fontSize:20,color: "#FEF7DB"},gridlines: {color: "#FEF7DB"},minorGridlines: {color: "#F7B1AB"},baselineColor: '#F7B1AB'},
		vAxis:{textStyle:{fontName: "Montserrat",fontSize:20,color: "#FEF7DB"},gridlines: {color: "#FEF7DB"},minorGridlines: {color: "#F7B1AB"},baselineColor: '#F7B1AB',format: 'short'},
		titleTextStyle: {fontName: "Gugi",fontSize:20,color: "#F7B1AB"},
		colors:['#FEF7DB'],
		backgroundColor: 'none',
		lineWidth: 3,
		};
	var chart = new google.visualization.AreaChart(document.getElementById('theNoTimeline'));
	chart.draw(data, options);
}
async function drawYesMoney() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Contributor');
	data.addColumn('number', '$ Contributed');
	data.addColumn({type:'string', role:'style'});
	data.addRows([
		['UBER',81102105.9,'FEF7DB'],
		['LYFT',78784887.67,'ebf1c9'],
		['DOORDASH',77669558.06,'d8ebb7'],
		['INSTACART',37598876.879999995,'c5e6a6'],
		['POSTMATES',20638250.83,'8dc4a6'],
	]);
		var options = {title:'Contributors & Donation Size ($)',
		width:450,
		height:300,
		legend:'none',
		hAxis:{textStyle:{fontName: "Montserrat",fontSize:20,color: "#FEF7DB"},gridlines: {color: "#FEF7DB"},minorGridlines: {color: "#c5e6a6"},baselineColor: '#c5e6a6',format: 'short'},
		vAxis:{textStyle:{fontName: "Montserrat",fontSize:12,color: "#FEF7DB"},gridlines: {color: "#FEF7DB"},minorGridlines: {color: "#c5e6a6"},baselineColor: '#c5e6a6'},
		titleTextStyle: {fontName: "Gugi",fontSize:20,color: "#c5e6a6"},
		backgroundColor: 'none',
		};
	var chart = new google.visualization.BarChart(document.getElementById('theYesMoney'));
	chart.draw(data, options);
}
async function drawNoMoney() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Contributor');
	data.addColumn('number', '$ Contributed');
	data.addRows([
		['INTERNATIONAL BROTHERHOOD OF TEAMSTERS',1500000.0],
		['SERVICE EMPLOYEES INTERNATIONAL UNION',1100000.0],
		['SERVICE EMPLOYEES INTERNATIONAL UNION UNITED HEALTH CARE WORKERS WEST POLITICAL ISSUES COMMITTEE',1000000.0],
		['UNITED FOOD AND COMMERCIAL WORKERS INTERNATIONAL UNION CLC',1000000.0],
		['TRANSPORT WORKERS UNION OF AMERICA',1000000.0],
		['UNITED FOOD & COMMERCIAL WORKERS LOCAL 770',1000000.0],
		['UNITED FOOD AND COMMERCIAL WORKERS WESTERN STATES ISSUES PAC',750000.0],
		['MEMBERS VOICE OF THE STATE BUILDING AND CONSTRUCTION TRADES COUNCIL OF CALIFORNIA',500000.0],
		['UNITED FOOD & COMMERCIAL WORKERS UNION LOCAL 135',500000.0],
		['TEAMSTERS JOINT EXECUTIVE COUNCIL NO. 7',478935.0],
		['SEIU CALIFORNIA STATE COUNCIL ISSUES COMMITTEE',441700.0],
		['WORKING FAMILIES ISSUES COMMITTEE, SPONSORED BY THE CALIFORNIA LABOR FEDERATION, AFL-CIO',437500.0],
		['SERVICE EMPLOYEES INTERNATIONAL UNION LOCAL 721 CTW, CLC ISSUES & INITIATIVES',400000.0],
		['UNITE HERE!',375000.0],
		['OPERATING ENGINEERS LOCAL UNION NO. 3 ISSUES ADVOCACY/BALLOT INITIATIVE PAC',250000.0],
		['CALIFORNIA FEDERATION OF TEACHERS COPE PROP/BALLOT COMMITTEE',250000.0],
		['UNITED FOOD AND COMMERCIAL WORKERS UNION LOCAL 1167',250000.0],
		['MILLION MORE VOTERS, SPONSORED BY THE CALIFORNIA LABOR FEDERATION, AFL-CIO',237065.0],
		['CALIFORNIA TEACHERS ASSOCIATION / ISSUES PAC',200000.0],
		['CALIFORNIA STATE COUNCIL OF LABORERS ISSUES PAC',200000.0],
		['DISTRICT COUNCIL OF IRONWORKERS POLITICAL ISSUES COMMITTEE',120000.0],
		['SEIU CALIFORNIA STATE COUNCIL (NONPROFIT 501 (C)(5))',104000.0],
		['UNITED FOOD & COMMERCIAL WORKERS UNION LOCAL 324',100000.0],
		['AMALGAMATED TRANSIT UNION',100000.0],
		['CALIFORNIA CONFERENCE BOARD, AMALGAMATED TRANSIT UNION ISSUES COMMITTEE',100000.0],
		['TEAMSTERS LOCAL UNION NO. 856',60000.0],
		['TEAMSTERS LOCAL UNION 63',50000.0],
		['TEAMSTERS LOCAL UNION NO. 396',40000.0],
		['TEAMSTERS LOCAL UNION NO. 542',31480.0],
		['TEAMSTERS LOCAL UNION NO. 166',25812.0],
		['NO ON 22, A COALITION OF ECONOMIC AND SOCIAL JUSTICE NONPROFITS DEDICATED TO WORKERS RIGHTS',25434.059999999998],
		['TEAMSTERS LOCAL UNION 986',25000.0],
		['TEAMSTERS LOCAL UNION NO. 986',25000.0],
		['SILICON VALLEY RISING ACTION, YES ON PROP 15, NO ON PROP 22, A COALITION OF ECONOMIC AND SOCIAL JUSTICE NONPROFITS (NONPROFIT 501C4)',20234.89],
		['AMERICAN FEDERATION OF STATE, COUNTY AND MUNICIPAL EMPLOYEES LOCAL 3299',20000.0],
		['TEAMSTERS LOCAL 1932',13088.0],
		['TEAMSTERS LOCAL UNION 848',13078.0],
		['INTERNATIONAL UNION OF OPERATING ENGINEERS LOCAL 12',10000.0],
		['CALIFORNIA CONFERENCE OF MACHINISTS',10000.0],
		['SILICON VALLEY RISING ACTION IN SUPPORT OF PROP 15',10000.0],
		['TEAMSTERS LOCAL UNION NO. 683',9944.0],
		['TEAMSTERS LOCAL UNION NO. 911',6000.0],
		['TEAMSTERS LOCAL UNION NO. 630',6000.0],
		['TEAMSTERS LOCAL UNION #896',5000.0],
		['SMART TD PAC',5000.0],
		['TEAMSTERS LOCAL UNION NO. 952',4000.0],
		['PARTNERSHIP FOR WORKING FAMILIES',2698.62],
		['POLITICAL COMMITTEE OF IBEW LOCAL UNION NO. 617',2500.0],
		['SAILORS UNION OF THE PACIFIC',2000.0],
		['TEAMSTERS LOCAL UNION NO. 481',2000.0],
		['CALIFORNIA DEMOCRATIC PARTY',1256.01],
		['NANCY OBER',1000.0],
		['NATIONAL EMPLOYMENT LAW PROJECT',807.11],
		['SAN MATEO COUNTY CENTRAL LABOR COUNCIL COMMITTEE ON POLITICAL EDUCATION',500.0],
	]);
		var options = {title:'Contributors & Donation Size ($)',
		width:450,
		height:300,
		legend:'none',
		hAxis:{textStyle:{fontName: "Montserrat",fontSize:20,color: "#FEF7DB"},gridlines: {color: "#FEF7DB"},minorGridlines: {color: "#f7b1ab"},baselineColor: '#f7b1ab',format: 'short'},
		vAxis:{textStyle:{fontName: "Montserrat",fontSize:12,color: "#FEF7DB"},gridlines: {color: "#FEF7DB"},minorGridlines: {color: "#f7b1ab"},baselineColor: '#f7b1ab'},
		titleTextStyle: {fontName: "Gugi",fontSize:20,color: "#f7b1ab"},
		backgroundColor: 'none',
		bar: { gap: 0 },
		colors:['#FEF7DB']
		};
	var chart = new google.visualization.Histogram(document.getElementById('theNoMoney'));
	chart.draw(data, options);
}
async function drawYesCoal() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Term');
	data.addColumn('number', 'Count');
	data.addColumn({type:'string', role:'style'});
	data.addRows([
		['Commerce',24,'FEF7DB'],
		['Chamber',20,'ebf1c9'],
		['California',20,'d8ebb7'],
		['Association',16,'c5e6a6'],
		['NAACP',11,'8dc4a6'],
	]);
		var options = {title:'Coalition Members: 5 Most Frequent Terms',
		width:650,
		height:300,
		legend:'none',
		hAxis:{textStyle:{fontName: "Montserrat",fontSize:20,color: "#FEF7DB"},gridlines: {color: "#FEF7DB"},minorGridlines: {color: "#c5e6a6"},baselineColor: '#c5e6a6',format: 'short'},
		vAxis:{textStyle:{fontName: "Montserrat",fontSize:12,color: "#FEF7DB"},gridlines: {color: "#FEF7DB"},minorGridlines: {color: "#c5e6a6"},baselineColor: '#c5e6a6'},
		titleTextStyle: {fontName: "Gugi",fontSize:20,color: "#c5e6a6"},
		backgroundColor: 'none',
		};
	var chart = new google.visualization.ColumnChart(document.getElementById('theYesCoal'));
	chart.draw(data, options);
}
async function drawNoCoal() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Term');
	data.addColumn('number', 'Count');
	data.addColumn({type:'string', role:'style'});
	data.addRows([
		['City',47,'FEF7DB'],
		['Councilmember',38,'fbdfcb'],
		['San',31,'f9c8bb'],
		['County',26,'f7b1ab'],
		['California',24,'c05a74'],
	]);
		var options = {title:'Coalition Members: 5 Most Frequent Terms',
		width:650,
		height:300,
		legend:'none',
		hAxis:{textStyle:{fontName: "Montserrat",fontSize:20,color: "#FEF7DB"},gridlines: {color: "#FEF7DB"},minorGridlines: {color: "#F7B1AB"},baselineColor: '#F7B1AB',format: 'short'},
		vAxis:{textStyle:{fontName: "Montserrat",fontSize:12,color: "#FEF7DB"},gridlines: {color: "#FEF7DB"},minorGridlines: {color: "#F7B1AB"},baselineColor: '#F7B1AB'},
		titleTextStyle: {fontName: "Gugi",fontSize:20,color: "#F7B1AB"},
		backgroundColor: 'none',
		};
	var chart = new google.visualization.ColumnChart(document.getElementById('theNoCoal'));
	chart.draw(data, options);
}