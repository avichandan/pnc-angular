import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
import * as moment from 'moment';
import { PerformanceItem } from '../../models/performance-item.interface';
import { targetPerformanceItem } from '../../models/performance-item.model';
import { Branch } from '../../models/branch-performance.interface';
import { BranchPerformanceListService } from '../../services/branch-performance.service';

@Component({
  selector: 'app-performance-graph',
  templateUrl: 'performance-graph.component.html',
  styleUrls: ['./performance-graph.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class PerformanceGraphComponent implements OnInit {

  @ViewChild('chartTarget') chartTarget: ElementRef;

  branches: Branch[];
  options = [
    { value: 1, displayValue: '1 YEAR' },
    { value: 2, displayValue: '2 YEAR' },
    { value: 3, displayValue: '3 YEAR' },
    { value: 4, displayValue: '4 YEAR' },
    { value: 5, displayValue: '5 YEAR' }
  ];

  selectedDefault: object = { value: 1, displayValue: '1 YEAR' }
  chart: Highcharts.ChartObject;
  items: Array<PerformanceItem> = [];
  item: any;
  startYear: number;
  endYear: number;
  xaxisLables: Array<any> = [];
  // axis: Array<number> = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];


  constructor(private branchPerformanceService: BranchPerformanceListService) { }

  ngOnInit() {

    this.items.push(targetPerformanceItem);
    this.branches = this.branchPerformanceService.getBranchesList();
    this.endYear = parseInt(moment().format('YYYY'));
    this.startYear = this.endYear - 1;

    this.getXaxisLabels();

  }

  getXaxisLabels() {
    for (let i = this.startYear; i <= this.endYear; i++) {
      for (let j = 1; j <= 12; j++) {
        if (i == this.endYear && j > 1) {
          break;
        }
        var startDate = moment([i, j - 1]);
        var endDate = moment(startDate).endOf('month');
        const startDateFormatted = moment(startDate['_d']).format('M');
        const endDateFormatted = moment(endDate['_d']).format('D');
        const value = startDateFormatted + '/' + endDateFormatted;

        this.xaxisLables.push(value);



      }
    }
    this.xaxisLables.splice(0, 1);
    this.drawChart();
  }

  // ngAfterViewInit() {
  // }

  drawChart(){
    const data = this.xaxisLables;
    const options: Highcharts.Options = {
      chart: {
        type: 'spline'
      },
      credits: {
        enabled: false
      },
      title: {
        text: ''
      },
      xAxis: {
        categories: data
      },
      yAxis: {
        title: {
          text: ''
        },
        labels: {
          formatter: function () {
            return this.axis.defaultLabelFormatter.call(this) + '%';
        }            
      },
        opposite: true,
        tickInterval: 4,
      },
     
      series: [{
        name: 'Jane',
        data: [1, 0, 4, 3, 4, 5, 6, 7, 7, 3, 4, 3],
        
      }, {
        name: 'John',
        data: [6, 0, 7, 3, 1, 5, 6, 8, 7, 3, 2, 3],

      }]
    };

    this.chart = chart(this.chartTarget.nativeElement, options);
  }

  itemSelected(item) {
    this.item = item;
  }

  checkedItem(checked) {
    if (checked) {

      this.items.push(this.item)
    }
    else {
      this.items.splice(this.item, 1)
    }
  }

  selectionChanged(value) {
    this.xaxisLables = [];
    this.startYear = this.endYear - value;
    this.getXaxisLabels();
    this.drawChart();
  }




}