import { Component, OnInit, Input, Output } from '@angular/core';
import { PerformanceItem } from '../../../models/performance-item.interface';

@Component({
    selector: 'app-performance-selected-item',
    templateUrl: './performance-selected-item.html',
    styleUrls: ['./performance-selected-item.scss']
})

export class PerformanceSelectedItemComponent implements OnInit {

    @Input('itemSelected') item: PerformanceItem;
    @Input ('index') index: number;
  public doughnutChartLabels:string[] = ['Equity', 'Fixed Cost', 'Cash'];
  public doughnutChartData:number[] = [];
    
  public doughnutChartType:string = 'doughnut';
  private doughnutChartColors: any[] =
        [
            {
                backgroundColor: ["#f16125", "#2774d0", "#1ca054"]
            }
        ]
  private options:any = {
    responsive: true,
    cutoutPercentage: 80
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