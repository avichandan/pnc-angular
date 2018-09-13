import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-performance-item',
    templateUrl: './performance.item.html',
    styleUrls: ['./performance.item.css']
})

export class PerformanceItemComponent implements OnInit {

    @Input('itemPassed') item: string;
    @Input('index') index: any;

  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

    constructor() { }

    ngOnInit() { }
}