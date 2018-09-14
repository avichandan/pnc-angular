import { Injectable, OnInit } from '@angular/core';
import { PerformanceItem } from '../models/performance-item.interface';
import { performanceItems } from '../models/performance-item.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()

export class PerformanceListService implements OnInit {

    items: PerformanceItem[];
    // itemsList = new BehaviorSubject<PerformanceItem[]>([])


    constructor() {
        this.items = performanceItems;
    }

    ngOnInit() {
        // this.itemsList.next(performanceItems)
    }

    getPerformanceItems() {
        return this.items;
    }

}