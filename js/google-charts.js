google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var VFData = google.visualization.arrayToDataTable([
        ['Language', 'Percentage of Project'],
        ['JavaScript', 50.1],
        ['HTML', 34.3],
        ['CSS', 9.7],
        ['Python', 5.8],
        ['Shell', 0.1]
    ]);

    var AIData = google.visualization.arrayToDataTable([
        ['Language', 'Percentage of Project'],
        ['C++', 74.2],
        ['C', 25.8]
    ]);

    var calcData = google.visualization.arrayToDataTable([
        ['Language', 'Percentage of Project'],
        ['Assembly', 100]
    ]);

    var options = {
        pieHole: 0.7,
        pieSliceText: 'none',
        legend: {
            alignment: 'center',
            textStyle: {
                color: 'white',
                fontSize: '15',
                fontName: 'Microsoft Yi Baiti',
            },
        },
        backgroundColor: 'transparent',
        pieSliceBorderColor: 'transparent',
        tooltip: {
            trigger: 'selection',

        },
        chartArea: {
            left: 0,
            width: '100%',
        },
    };

    var VFChart = new google.visualization.PieChart(document.getElementById('VFChart'));
    var AIChart = new google.visualization.PieChart(document.getElementById('AIChart'));
    var calcChart = new google.visualization.PieChart(document.getElementById('calcChart'));

    VFChart.draw(VFData, options);
    AIChart.draw(AIData, options);
    calcChart.draw(calcData, options);
}