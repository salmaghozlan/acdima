am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv", am4charts.PieChart);


    // Add data
    chart.data = [{
        "country": "Jordan",
        "litres": 13,
        "color": "#0F2046"

    }, {
        "country": "Yemen",
        "litres": 79,
        "color": "#0F2046"
    }, {
        "country": "Minister of treasury / Jordan",
        "litres": 26,
        "color": "#0F2046"
    }, {
        "country": "Sudia Arabia",
        "litres": 239,
        "color": "#606B83"
    }, {
        "country": "Oman",
        "litres": 79,
        "color": "#868EA0"
    }, {
        "country": "Sudan",
        "litres": 14,
        "color": "#556B9C"
    }, {
        "country": "Kwait",
        "litres": 819,
        "color": "#6881B8"
    }, {
        "country": "United Arab Emirate",
        "litres": 819,
        "color": "#8BA4D9"
    }, {
        "country": "Egypt",
        "litres": 149,
        "color": "#A5BDEF"
    }
        , {
        "country": "Bahrain",
        "litres": 114,
        "color": "#324775"
    }
        , {
        "country": "The Lybian investing company",
        "litres": 819,
        "color": "#435F9C"
    }
        , {
        "country": "Corporation/ Algeria",
        "litres": 31,
        "color": "#4A608E"
    }
        , {
        "country": "Tunis",
        "litres": 235,
        "color": "#8CB1D6"
    }
        , {
        "country": "Palestine",
        "litres": 19,
        "color": "#8CB1D6"
    }
        , {
        "country": "Qatar Holding Company",
        "litres": 119,
        "color": "#8CB1D6"

    }
        , {
        "country": "Iraq",
        "litres": 238,
        "color": "#AECCEA"
    }
        , {
        "country": "Syria",
        "litres": 820,
        "color": "#0F2046"
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

    // pieSeries.labels.template.fill = am4core.color("#D9362E");
    pieSeries.labels.template.minWidth = 10;
    
    // pieSeries.labels.template.textAlign = 'start';

    // pieSeries.labels.template.setAll({
    //     maxWidth: 90,
    //     oversizedBehavior: "wrap" // to truncate labels, use "truncate"
    //   });

    // var chart = root.container.children.push(
    //     am5percent.PieChart.new(root, {
    //       radius: am5.percent(100)
    //     })
    //   );
      
    //   // ...
      
    //   pieSeries.labels.template.setAll({
    //     radius: 10,
    //     inside: true
    //   });
    
    // pieSeries.alignLabels = false;
       
    pieSeries.labels.template.wrap = true;
    pieSeries.labels.template.truncate = false;
    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;
    
    
    pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
    pieSeries.labels.template.fill = am4core.color("#D9362E");   

}); // end am4core.ready()



