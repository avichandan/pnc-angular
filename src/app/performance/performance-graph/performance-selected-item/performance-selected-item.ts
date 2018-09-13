import { Component, OnInit, Input, Output } from '@angular/core';
import { PerformanceItem } from '../../../models/performance-item.interface';

@Component({
    selector: 'app-performance-selected-item',
    templateUrl: './performance-selected-item.html',
    styleUrls: ['./performance-selected-item.css']
})

export class PerformanceSelectedItemComponent implements OnInit {

    @Input('itemSelected') item: PerformanceItem;
    @Input ('index') index: number;
  public doughnutChartLabels:string[] = ['Equity', 'Fixed Cost', 'Cash'];
  public doughnutChartData:number[] = [];
    
  public doughnutChartType:string = 'doughnut';
  public chartOptions: {
    cutoutPercentage: 10
}
  

    constructor() { }

    ngOnInit() { 
        this.doughnutChartData = [
            this.item.equity,
            this.item.fixedIncome,
            this.item.cash
          ];
    }

    public chartClicked(e:any):void {
    }
   
    public chartHovered(e:any):void {
    }

}