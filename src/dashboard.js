  
  // Data
  function getData() {
      fetch('./products.json').then(function(response) {
        return response.json()
      }).then(function(data) {
        chart.series[0].addPoint(data[0].qty),
        chart.series[1].addPoint(data[1].qty)
      })
  }

  // Chart
var options = {
    chart: {
      type: 'column',
      events: {
          load: getData
      }
    },
    title: {
      text: 'Sales Dashboard'
    },
    subtitle: {
        text: `Total Sale ${}`
    },
    xAxis: {
     // type: 'datetime',
     
    },
    yAxis: {
      title: {
        text: 'Price (USD)'
      }
    },
    legend: {
      enabled: false
    },
    exporting: {
      enabled: false
    },
    series: [{
      name: 'Jeans',
      data: []
    },
    {
        name: 'Tees',
        data: []
      }]
  };
  var chart = Highcharts.chart('container', options)