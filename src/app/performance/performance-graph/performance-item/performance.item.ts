import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PerformanceItem } from '../../../models/performance-item.interface';

@Component({
    selector: 'app-performance-item',
    templateUrl: './performance.item.html',
    styleUrls: ['./performance.item.css']
})

export class PerformanceItemComponent implements OnInit {

    @Input('itemPassed') item: PerformanceItem;
    @Input('index') index: any;
    @Output('selectedItem') itemSelected = new EventEmitter<PerformanceItem>();
    @Output('checkedItem') itemChecked = new EventEmitter();
    applyClass: boolean = false;

  public doughnutChartLabels:string[] = ['Equity', 'Fixed Cost', 'Cash'];
  public doughnutChartData:number[] = [];
    
  public doughnutChartType:string = 'doughnut';
  public chartOptions: {
    // legend: {
    //     display: false
    // }

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
  
    toggle(event){
        this.applyClass = !this.applyClass;
        this.itemSelected.emit(this.item)
        this.itemChecked.emit(event.checked)
    }
}