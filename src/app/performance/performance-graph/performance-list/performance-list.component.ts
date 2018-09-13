import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-performance-list',
    templateUrl: './performance-list.component.html',
    styleUrls: ['./performance-list.component.css']
})

export class PerformancelistComponent implements OnInit {

    items = [1, 2, 3, 4];
    @Output('selectedItem') selectedItem = new EventEmitter();
    @Output('itemChecked') itemChecked = new EventEmitter()
    constructor() { }

    ngOnInit() { }

    selectThisItem(item){
        this.selectedItem.emit(item)
    }

    checkedItem(checked){
        this.itemChecked.emit(checked)
    }
}