import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import * as c3 from 'c3';
import lodash from 'lodash';
import { PerformanceItem } from '../../models/performance-item.interface';
import { targetPerformanceItem } from '../../models/performance-item.model';
import { Branch } from '../../models/branch-performance.interface';
import { BranchPerformanceListService } from '../../services/branch-performance.service';

@Component({
  selector: 'app-performance-graph',
  templateUrl: 'performance-graph.component.html',
  styleUrls: ['./performance-graph.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PerformanceGraphComponent implements OnInit {

  branches: Branch[];
  options = [
    { value: 1, displayValue: '1 YEAR' },
    { value: 2, displayValue: '2 YEAR' },
    { value: 3, displayValue: '3 YEAR' },
    { value: 4, displayValue: '4 YEAR' },
    { value: 5, displayValue: '5 YEAR' }
  ];

  selectedDefault: object = { value: 1, displayValue: '1 YEAR' }
  items: Array<PerformanceItem> = [];
  item: any;
  startYear: number;
  endYear: number;
  xaxisLables: Array<any> = [];
  itemSelectedDisVariable: boolean = false;
  columns: Array<any>;
  showAverage: Array<any> = [];
  colors: any = {};


  constructor(private branchPerformanceService: BranchPerformanceListService) {

  }

  ngOnInit() {

    this.items.push(targetPerformanceItem);
    this.branches = this.branchPerformanceService.getBranchesList();
    this.endYear = parseInt(moment().format('YYYY'));
    this.startYear = this.endYear - 1;
    this.columns = [
      ['x', '2013-02-1', '2013-03-1', '2013-04-1', '2013-05-1', '2013-06-1',
        '2013-07-1', '2013-08-1', '2013-09-1', '2013-10-1', '2013-11-1', '2013-12-1', '2014-01-1']
    ]
    this.columns.push(targetPerformanceItem.data);
   
    const key = targetPerformanceItem.data[0].toString();
    const value = targetPerformanceItem.color;
    const netPercent = targetPerformanceItem.netPercent
    this.showAverage.push([netPercent, value]);
    Object.assign(this.colors, { key: value})
  }



  ngAfterViewInit() {

    this.drawChart();
  }

  drawChart() {
    let chart = c3.generate({
      data: {
        x: 'x',
        columns: this.columns,
        axes: {
          data1: 'y2',
          data2: 'y2',
          data3: 'y2'
        },
        type: 'spline',
        colors: this.colors,
      },

      axis: {
        x: {
          type: 'timeseries',
          padding: {
            left: 0,
            right: 0,
          },
          tick: {
            values: ['2013-02-1', '2013-03-1', '2013-04-1', '2013-05-1', '2013-06-1',
              '2013-07-1', '2013-08-1', '2013-09-1', '2013-10-1', '2013-11-1', '2013-12-1', '2014-01-1'],
            format: function (value) {
              const monthEnd = moment(value).endOf('month')['_d'];
              const updatedEndOfMonth = moment(monthEnd).format('DD');
              return moment(value).format('M' + '/' + updatedEndOfMonth)
            },
            outer: false

          }
        },
        y: {
          show: false
        },
        y2: {
          show: false,
          min: 10,
          max: 100,
          label: {
            text: '',
            position: 'outer-middle',
          },
          tick: {
            format: function (value) {
              return value + '%';
            }
          }
        }
      },
      grid: {
        y: {
          lines: [
            {
              value: 0,
              text: '0%',
              axis: 'y2',
              class: 'grid800'
            },
            {
              value: 10,
              text: '10%',
              axis: 'y2',
              class: 'grid800'
            },
            {
              value: 20,
              text: '20%',
              axis: 'y2',
              class: 'grid800'
            },
            {
              value: 30,
              text: '30%',
              axis: 'y2',
              class: 'grid800'
            },
            {
              value: 40,
              text: '40%',
              axis: 'y2',
              class: 'grid800'
            },
            {
              value: 50,
              text: '50%',
              axis: 'y2',
              class: 'grid800'
            },
            {
              value: 60,
              text: '60%',
              axis: 'y2',
              class: 'grid800'
            },
            {
              value: 70,
              text: '70%',
              axis: 'y2',
              class: 'grid800'
            },
            {
              value: 80,
              text: '80%',
              axis: 'y2',
              class: 'grid800'
            },
            {
              value: 90,
              text: '90%',
              axis: 'y2',
              class: 'grid800'
            },
            {
              value: 100,
              text: '100%',
              axis: 'y2',
              class: 'grid800'
            },
          ]
        }
      },
    });

  }



  itemSelected(item) {
    this.item = item;
  }

  checkedItem(checked) {
    if (checked) {
      this.items.push(this.item);
      this.columns.push(this.item.data);
      const key = this.item.data[0].toString();
      const value = this.item.color;
      var obj = {};
      obj[key] = value;
      Object.assign(this.colors, obj);
      const netPercent = this.item.netPercent
      this.showAverage.push([netPercent, value]);
      console.log("sddddddd", this.showAverage)
      this.drawChart();
    }
    else {
      this.items.splice(this.item, 1);
      let index;
      this.columns.forEach(item => {
        item.forEach(insideItem => {
          if (insideItem == this.item.data[0]) {
            index = this.columns.indexOf(item)
          }
        })
      })
      this.columns.splice(index, 1)
      const key = this.item.data[0].toString();
      let avgIndex;
      this.showAverage.forEach(item => {
        if(item[key] == this.item.netPercent){
          console.log("yes")
          avgIndex = this.showAverage.indexOf(item);
        }
      })
      this.showAverage.splice(avgIndex, 1)
      delete this.colors[key];
      this.drawChart();
    }
  }
  selectionChanged(value) {
    this.xaxisLables = [];
    this.startYear = this.endYear - value;
  }


  itemSelectedDis(event) {
    this.itemSelectedDisVariable = event;
  }
}