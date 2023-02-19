import {
  AfterViewInit,
  Component,
  Inject,
  NgZone,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// import * as am4core from '@amcharts/amcharts4/core';
// import * as am4charts from '@amcharts/amcharts4/charts';
// import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import * as am5 from '@amcharts/amcharts5/index';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

let chartData: any = {
  '1995': [
    { sector: 'Agriculture', size: 6.6 },
    { sector: 'Mining and Quarrying', size: 0.6 },
    { sector: 'Manufacturing', size: 23.2 },
    { sector: 'Electricity and Water', size: 2.2 },
    { sector: 'Construction', size: 4.5 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 14.6 },
    { sector: 'Transport and Communication', size: 9.3 },
    { sector: 'Finance, real estate and business services', size: 22.5 },
  ],
  '1996': [
    { sector: 'Agriculture', size: 6.4 },
    { sector: 'Mining and Quarrying', size: 0.5 },
    { sector: 'Manufacturing', size: 22.4 },
    { sector: 'Electricity and Water', size: 2 },
    { sector: 'Construction', size: 4.2 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 14.8 },
    { sector: 'Transport and Communication', size: 9.7 },
    { sector: 'Finance, real estate and business services', size: 22 },
  ],
  '1997': [
    { sector: 'Agriculture', size: 6.1 },
    { sector: 'Mining and Quarrying', size: 0.2 },
    { sector: 'Manufacturing', size: 20.9 },
    { sector: 'Electricity and Water', size: 1.8 },
    { sector: 'Construction', size: 4.2 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 13.7 },
    { sector: 'Transport and Communication', size: 9.4 },
    { sector: 'Finance, real estate and business services', size: 22.1 },
  ],
  '1998': [
    { sector: 'Agriculture', size: 6.2 },
    { sector: 'Mining and Quarrying', size: 0.3 },
    { sector: 'Manufacturing', size: 21.4 },
    { sector: 'Electricity and Water', size: 1.9 },
    { sector: 'Construction', size: 4.2 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 14.5 },
    { sector: 'Transport and Communication', size: 10.6 },
    { sector: 'Finance, real estate and business services', size: 23 },
  ],
  '1999': [
    { sector: 'Agriculture', size: 5.7 },
    { sector: 'Mining and Quarrying', size: 0.2 },
    { sector: 'Manufacturing', size: 20 },
    { sector: 'Electricity and Water', size: 1.8 },
    { sector: 'Construction', size: 4.4 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 15.2 },
    { sector: 'Transport and Communication', size: 10.5 },
    { sector: 'Finance, real estate and business services', size: 24.7 },
  ],
  '2000': [
    { sector: 'Agriculture', size: 5.1 },
    { sector: 'Mining and Quarrying', size: 0.3 },
    { sector: 'Manufacturing', size: 20.4 },
    { sector: 'Electricity and Water', size: 1.7 },
    { sector: 'Construction', size: 4 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 16.3 },
    { sector: 'Transport and Communication', size: 10.7 },
    { sector: 'Finance, real estate and business services', size: 24.6 },
  ],
  '2001': [
    { sector: 'Agriculture', size: 5.5 },
    { sector: 'Mining and Quarrying', size: 0.2 },
    { sector: 'Manufacturing', size: 20.3 },
    { sector: 'Electricity and Water', size: 1.6 },
    { sector: 'Construction', size: 3.1 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 16.3 },
    { sector: 'Transport and Communication', size: 10.7 },
    { sector: 'Finance, real estate and business services', size: 25.8 },
  ],
  '2002': [
    { sector: 'Agriculture', size: 5.7 },
    { sector: 'Mining and Quarrying', size: 0.2 },
    { sector: 'Manufacturing', size: 20.5 },
    { sector: 'Electricity and Water', size: 1.6 },
    { sector: 'Construction', size: 3.6 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 16.1 },
    { sector: 'Transport and Communication', size: 10.7 },
    { sector: 'Finance, real estate and business services', size: 26 },
  ],
  '2003': [
    { sector: 'Agriculture', size: 4.9 },
    { sector: 'Mining and Quarrying', size: 0.2 },
    { sector: 'Manufacturing', size: 19.4 },
    { sector: 'Electricity and Water', size: 1.5 },
    { sector: 'Construction', size: 3.3 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 16.2 },
    { sector: 'Transport and Communication', size: 11 },
    { sector: 'Finance, real estate and business services', size: 27.5 },
  ],
  '2004': [
    { sector: 'Agriculture', size: 4.7 },
    { sector: 'Mining and Quarrying', size: 0.2 },
    { sector: 'Manufacturing', size: 18.4 },
    { sector: 'Electricity and Water', size: 1.4 },
    { sector: 'Construction', size: 3.3 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 16.9 },
    { sector: 'Transport and Communication', size: 10.6 },
    { sector: 'Finance, real estate and business services', size: 28.1 },
  ],
  '2005': [
    { sector: 'Agriculture', size: 4.3 },
    { sector: 'Mining and Quarrying', size: 0.2 },
    { sector: 'Manufacturing', size: 18.1 },
    { sector: 'Electricity and Water', size: 1.4 },
    { sector: 'Construction', size: 3.9 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 15.7 },
    { sector: 'Transport and Communication', size: 10.6 },
    { sector: 'Finance, real estate and business services', size: 29.1 },
  ],
  '2006': [
    { sector: 'Agriculture', size: 4 },
    { sector: 'Mining and Quarrying', size: 0.2 },
    { sector: 'Manufacturing', size: 16.5 },
    { sector: 'Electricity and Water', size: 1.3 },
    { sector: 'Construction', size: 3.7 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 14.2 },
    { sector: 'Transport and Communication', size: 12.1 },
    { sector: 'Finance, real estate and business services', size: 29.1 },
  ],
  '2007': [
    { sector: 'Agriculture', size: 4.7 },
    { sector: 'Mining and Quarrying', size: 0.2 },
    { sector: 'Manufacturing', size: 16.2 },
    { sector: 'Electricity and Water', size: 1.2 },
    { sector: 'Construction', size: 4.1 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 15.6 },
    { sector: 'Transport and Communication', size: 11.2 },
    { sector: 'Finance, real estate and business services', size: 30.4 },
  ],
  '2008': [
    { sector: 'Agriculture', size: 4.9 },
    { sector: 'Mining and Quarrying', size: 0.3 },
    { sector: 'Manufacturing', size: 17.2 },
    { sector: 'Electricity and Water', size: 1.4 },
    { sector: 'Construction', size: 5.1 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 15.4 },
    { sector: 'Transport and Communication', size: 11.1 },
    { sector: 'Finance, real estate and business services', size: 28.4 },
  ],
  '2009': [
    { sector: 'Agriculture', size: 4.7 },
    { sector: 'Mining and Quarrying', size: 0.3 },
    { sector: 'Manufacturing', size: 16.4 },
    { sector: 'Electricity and Water', size: 1.9 },
    { sector: 'Construction', size: 4.9 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 15.5 },
    { sector: 'Transport and Communication', size: 10.9 },
    { sector: 'Finance, real estate and business services', size: 27.9 },
  ],
  '2010': [
    { sector: 'Agriculture', size: 4.2 },
    { sector: 'Mining and Quarrying', size: 0.3 },
    { sector: 'Manufacturing', size: 16.2 },
    { sector: 'Electricity and Water', size: 2.2 },
    { sector: 'Construction', size: 4.3 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 15.7 },
    { sector: 'Transport and Communication', size: 10.2 },
    { sector: 'Finance, real estate and business services', size: 28.8 },
  ],
  '2011': [
    { sector: 'Agriculture', size: 4.1 },
    { sector: 'Mining and Quarrying', size: 0.3 },
    { sector: 'Manufacturing', size: 14.9 },
    { sector: 'Electricity and Water', size: 2.3 },
    { sector: 'Construction', size: 5 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 17.3 },
    { sector: 'Transport and Communication', size: 10.2 },
    { sector: 'Finance, real estate and business services', size: 27.2 },
  ],
  '2012': [
    { sector: 'Agriculture', size: 3.8 },
    { sector: 'Mining and Quarrying', size: 0.3 },
    { sector: 'Manufacturing', size: 14.9 },
    { sector: 'Electricity and Water', size: 2.6 },
    { sector: 'Construction', size: 5.1 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 15.8 },
    { sector: 'Transport and Communication', size: 10.7 },
    { sector: 'Finance, real estate and business services', size: 28 },
  ],
  '2013': [
    { sector: 'Agriculture', size: 3.7 },
    { sector: 'Mining and Quarrying', size: 0.2 },
    { sector: 'Manufacturing', size: 14.9 },
    { sector: 'Electricity and Water', size: 2.7 },
    { sector: 'Construction', size: 5.7 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 16.5 },
    { sector: 'Transport and Communication', size: 10.5 },
    { sector: 'Finance, real estate and business services', size: 26.6 },
  ],
  '2014': [
    { sector: 'Agriculture', size: 3.9 },
    { sector: 'Mining and Quarrying', size: 0.2 },
    { sector: 'Manufacturing', size: 14.5 },
    { sector: 'Electricity and Water', size: 2.7 },
    { sector: 'Construction', size: 5.6 },
    { sector: 'Trade (Wholesale, Retail, Motor)', size: 16.6 },
    { sector: 'Transport and Communication', size: 10.5 },
    { sector: 'Finance, real estate and business services', size: 26.5 },
  ],
};

@Component({
  selector: 'app-armchart',
  templateUrl: './armchart.component.html',
  styleUrls: ['./armchart.component.scss'],
})
export class ArmchartComponent implements OnInit, AfterViewInit, OnDestroy {
  // private chart!: am4charts.XYChart;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private zone: NgZone
  ) {}

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      // am4core.useTheme(am4themes_animated);
      // let chart = am4core.create('chartdiv', am4charts.XYChart);
      // chart.paddingRight = 20;
      // let data = [];
      // let visits = 10;
      // for (let i = 1; i < 366; i++) {
      //   visits += Math.round(
      //     (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
      //   );
      //   data.push({
      //     date: new Date(2018, 0, i),
      //     name: 'name' + i,
      //     value: visits,
      //   });
      // }
      // console.log('data', data);
      // chart.data = data;
      // let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      // dateAxis.renderer.grid.template.location = 0;
      // let valueAxis: any = chart.yAxes.push(new am4charts.ValueAxis());
      // valueAxis.tooltip.disabled = true;
      // valueAxis.renderer.minWidth = 35;
      // let series = chart.series.push(new am4charts.LineSeries());
      // series.dataFields.dateX = 'date';
      // series.dataFields.valueY = 'value';
      // series.tooltipText = '{valueY.value}';
      // chart.cursor = new am4charts.XYCursor();
      // let scrollbarX = new am4charts.XYChartScrollbar();
      // scrollbarX.series.push(series);
      // chart.scrollbarX = scrollbarX;
      // this.chart = chart;

      var root = am5.Root.new('chartdiv');

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([am5themes_Animated.new(root)]);

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
      var chart = root.container.children.push(
        am5percent.PieChart.new(root, {
          innerRadius: 100,
          layout: root.verticalLayout,
        })
      );

      // Create series
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
      var series = chart.series.push(
        am5percent.PieSeries.new(root, {
          valueField: 'size',
          categoryField: 'sector',
        })
      );

      // Set data
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
      series.data.setAll([
        { sector: 'Agriculture', size: 6.6 },
        { sector: 'Mining and Quarrying', size: 0.6 },
        { sector: 'Manufacturing', size: 23.2 },
        { sector: 'Electricity and Water', size: 2.2 },
        { sector: 'Construction', size: 4.5 },
        { sector: 'Trade (Wholesale, Retail, Motor)', size: 14.6 },
        { sector: 'Transport and Communication', size: 9.3 },
        { sector: 'Finance, real estate and business services', size: 22.5 },
      ]);

      // Play initial series animation
      // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
      series.appear(1000, 100);

      // Add label
      var label = root.tooltipContainer.children.push(
        am5.Label.new(root, {
          x: am5.p50,
          y: am5.p50,
          centerX: am5.p50,
          centerY: am5.p50,
          fill: am5.color(0x000000),
          fontSize: 50,
        })
      );

      // Animate chart data
      var currentYear: any = 1995;
      function getCurrentData() {
        var data = chartData[currentYear];
        currentYear++;
        if (currentYear > 2014) currentYear = 1995;
        return data;
      }

      function loop() {
        label.set('text', currentYear);
        var data = getCurrentData();
        for (var i = 0; i < data.length; i++) {
          series.data.setIndex(i, data[i]);
        }
        chart.setTimeout(loop, 4000);
      }

      loop();
    });
  }

  ngOnDestroy() {
    // Clean up chart when the component is removed
    // this.browserOnly(() => {
    //   if (this.chart) {
    //     this.chart.dispose();
    //   }
    // });
  }
}
