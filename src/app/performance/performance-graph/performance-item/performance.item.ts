import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PerformanceItem } from '../../../models/performance-item.interface';

@Component({
    selector: 'app-performance-item',
    templateUrl: './performance.item.html',
    styleUrls: ['./performance.item.scss']
})

export class PerformanceItemComponent implements OnInit {

    @Input('itemPassed') item: PerformanceItem;
    @Input('index') index: any;
    @Output('selectedItem') itemSelected = new EventEmitter<PerformanceItem>();
    @Output('checkedItem') itemChecked = new EventEmitter();
    @Output('selectedItemToDisplay') selectedItemToDisplay = new EventEmitter();
    applyClass: boolean = false;

    private doughnutChartLabels: string[] = ['Equity', 'Fixed Cost', 'Cash'];
    private doughnutChartData: number[] = [];

    private doughnutChartType: string = 'doughnut';
    private doughnutChartColors: any[] =
        [
            {
                backgroundColor: ["#f16125", "#2774d0", "#1ca054"]
            }
        ]

    private options: any = {
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

    private chartClicked(e: any): void {
    }

    private chartHovered(e: any): void {
    }

    toggle(event) {
        this.applyClass = !this.applyClass;
        this.itemSelected.emit(this.item);
        this.itemChecked.emit(event.checked);
        this.selectedItemToDisplay.emit(this.applyClass);
    }
}