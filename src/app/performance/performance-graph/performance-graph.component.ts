import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';
import * as moment from 'moment';
import * as c3 from 'c3';
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


  constructor(private branchPerformanceService: BranchPerformanceListService) { }

  ngOnInit() {

    this.items.push(targetPerformanceItem);
    this.branches = this.branchPerformanceService.getBranchesList();
    this.endYear = parseInt(moment().format('YYYY'));
    this.startYear = this.endYear - 1;

  }

 

  ngAfterViewInit() {

    let chart = c3.generate({
      data: {
        x: 'x',
        columns: [
          ['x', '2013-02-1', '2013-03-1', '2013-04-1', '2013-05-1','2013-06-1',
           '2013-07-1','2013-08-1', '2013-09-1', '2013-10-1', '2013-11-1', '2013-12-1', '2014-01-1'],
          ['data1', 30, 21, 10, 40, 15, 25, 41, 55, 14, 67, 85, 33],
          ['data2', 13, 10, 14, 20, 15, 5, 47, 25, 62, 27, 57, 78],
          ['data3', 13, 12, 17, 22, 19, 35, 23, 89, 94, 45, 15, 29]
        ],
        axes: {
          data1: 'y2',
          data2: 'y2',
          data3: 'y2'
        },
        type: 'spline',
        colors: {
          data1: 'red',
          data2: 'yellow',
          data3: 'green'
        },
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            values: ['2013-02-1', '2013-03-1', '2013-04-1', '2013-05-1','2013-06-1',
            '2013-07-1','2013-08-1', '2013-09-1', '2013-10-1', '2013-11-1', '2013-12-1', '2014-01-1'],
            format: function(value){
              const monthEnd = moment(value).endOf('month')['_d'];
              const updatedEndOfMonth = moment(monthEnd).format('DD');
              return moment(value).format('M' + '/' + updatedEndOfMonth)
            }
            
          }
        },
        y: {
          show: false
        },
        y2: {
          show: true,
          min: 10,
          max: 100,
          label: {
            text: '',
            position: 'outer-middle',
          },
          tick: {
            format: function (value) {
              return value + '%';
            },
            outer: false
          }
        }
      }
    });

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
  }


  itemSelectedDis(event){
    console.log("eventsss", event);
    this.itemSelectedDisVariable = event;
  }
}