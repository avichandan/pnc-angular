import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';

import {performanceItems} from '../../models/performance-item.model'
import { PerformanceItem } from '../../models/performance-item.interface';

@Component({
    selector: 'app-performance-graph',
    templateUrl: 'performance-graph.component.html',
    styleUrls: ['./performance-graph.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class PerformanceGraphComponent implements OnInit, AfterViewInit {

    @ViewChild('chartTarget') chartTarget: ElementRef;

    chart: Highcharts.ChartObject;
    items: Array<PerformanceItem> = [];
    item: any;


    constructor() { }

    ngOnInit() {
      performanceItems.forEach(item => {
        if(item.target){
          this.items.push(item)
        }
      })
     }

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
            //dashStyle: 'Dash',
            data: [1, 0, 4]
          }, {
            name: 'John',
            data: [5, 7, 3]
          }]
        };
      
        this.chart = chart(this.chartTarget.nativeElement, options);
      }
    
      itemSelected(item){
       this.item = item;
      }

      checkedItem(checked){
        if(checked){
         
          this.items.push(this.item)
        }
        else {
          this.items.splice(this.item, 1)
        }
      }
    
      
    
     
}