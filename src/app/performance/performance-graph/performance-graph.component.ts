import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

@Component({
    selector: 'app-performance-graph',
    templateUrl: 'performance-graph.component.html',
    styleUrls: ['./performance-graph.component.css']
})

export class PerformanceGraphComponent implements OnInit, AfterViewInit {

    @ViewChild('chartTarget') chartTarget: ElementRef;

    chart: Highcharts.ChartObject;


    constructor() { }

    ngOnInit() { }

    ngAfterViewInit() {

        const data = ['Orange', 'Apple', 'Mango']
        const options: Highcharts.Options = {
          chart: {
            type: 'line'
          },
          title: {
            text: 'Fruit Consumption'
          },
          xAxis: {
            categories: data
          },
          yAxis: {
            title: {
              text: 'Fruit eaten'
            },
            opposite: true,
            tickInterval: 4,
          },
          series: [{
            name: 'Jane',
            data: [1, 0, 4],
            dashStyle: 'Dash'
          }, {
            name: 'John',
            data: [5, 7, 3]
          }]
        };
      
        this.chart = chart(this.chartTarget.nativeElement, options);
      }
    
    
      
    
     
}