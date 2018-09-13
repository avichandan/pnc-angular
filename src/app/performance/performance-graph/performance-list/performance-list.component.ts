import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { PerformanceItem } from '../../../models/performance-item.interface';
import { performanceItems } from '../../../models/performance-item.model'

@Component({
    selector: 'app-performance-list',
    templateUrl: './performance-list.component.html',
    styleUrls: ['./performance-list.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class PerformancelistComponent implements OnInit {
    //items = [1, 2, 3, 4, 5, 6];
    items: PerformanceItem[];
    @Output('selectedItem') selectedItem = new EventEmitter();
    @Output('itemChecked') itemChecked = new EventEmitter()
    constructor() { }

    ngOnInit() {
        this.items = performanceItems;
     }

    selectThisItem(item){
        console.log("item", item)
        this.selectedItem.emit(item)
    }

    checkedItem(checked){
        this.itemChecked.emit(checked)
    }
}