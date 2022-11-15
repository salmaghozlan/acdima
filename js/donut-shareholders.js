am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.PieChart);


    // Add data
    chart.data = [{
        "country": "Arab Mining Company",
        "litres": 80.4,
        "color": "#01058A"

    }, {
        "country": "Arab Mining Company",
        "litres": 80.4,
        "color": "#01058A"
    }, {
        "country": "Arab Mining Company",
        "litres": 80.4,
        "color": "#10234D"
    }
       

    ];

    chart.responsive.enabled = true;
    // Set inner radius
    chart.innerRadius = am4core.percent(50);

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
  
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    
    pieSeries.slices.template.strokeWidth = 2;
    pieSeries.slices.template.strokeOpacity = 1;

    pieSeries.slices.template.propertyFields.fill = "color";

    
    pieSeries.labels.template.minWidth = 10;
   
       
    pieSeries.labels.template.wrap = true;
    pieSeries.labels.template.truncate = false;
    
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    
    
    // pieSeries.labels.template.text="{category}"

    pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
    pieSeries.labels.template.fill = am4core.color("#D9362E");
}); // end am4core.ready()



