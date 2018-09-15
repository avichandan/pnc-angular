import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { PerformanceItem } from '../../../models/performance-item.interface';
import { PerformanceListService } from '../../../services/performance-list.service';

@Component({
    selector: 'app-performance-list',
    templateUrl: './performance-list.component.html',
    styleUrls: ['./performance-list.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class PerformancelistComponent implements OnInit {
    items: PerformanceItem[];
    selectedItemDisplay: boolean;
    @Output('selectedItem') selectedItem = new EventEmitter();
    @Output('itemChecked') itemChecked = new EventEmitter();
    @Output('selectItemDis') selectItemDis = new EventEmitter();

    constructor(private performanceListService: PerformanceListService) { }

    ngOnInit() {
        this.items = this.performanceListService.getPerformanceItems();
    }

    selectThisItem(item) {
        this.selectedItem.emit(item)
    }

    checkedItem(checked) {
        this.itemChecked.emit(checked)
    }
    itemSelectedToDisplay(event) {
        console.log('event', event);
        this.selectedItemDisplay = event;
        this.selectItemDis.emit(this.selectedItemDisplay)

    }
}