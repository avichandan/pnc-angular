import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PerformanceItem } from '../../../models/performance-item.interface';
import { performanceItems } from '../../../models/performance-item.model'

@Component({
    selector: 'app-performance-list',
    templateUrl: './performance-list.component.html',
    styleUrls: ['./performance-list.component.css']
})

export class PerformancelistComponent implements OnInit {

    items: PerformanceItem[];
    @Output('selectedItem') selectedItem = new EventEmitter();
    @Output('itemChecked') itemChecked = new EventEmitter()
    constructor() { }

    ngOnInit() {
        this.items = performanceItems;
     }

    selectThisItem(item){
        this.selectedItem.emit(item)
    }

    checkedItem(checked){
        this.itemChecked.emit(checked)
    }
}