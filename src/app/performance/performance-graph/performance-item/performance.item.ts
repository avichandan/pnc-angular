import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-performance-item',
    templateUrl: './performance.item.html',
    styleUrls: ['./performance.item.css']
})

export class PerformanceItemComponent implements OnInit {

    @Input('itemPassed') item: string;
    @Input('index') index: any;
    @Output('selectedItem') itemSelected = new EventEmitter();
    @Output('checkedItem') itemChecked = new EventEmitter();

  // public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
  }
 
  public chartHovered(e:any):void {
  }

  toggle(event){
      this.itemSelected.emit(this.item)
      this.itemChecked.emit(event.checked)
  }

    constructor() { }

    ngOnInit() { }
}