import { Injectable, OnInit } from '@angular/core';
import { PerformanceItem } from '../models/performance-item.interface';
import { performanceItems } from '../models/performance-item.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()

export class PerformanceListService {

    items: PerformanceItem[];


    constructor() {
        this.items = performanceItems;
    }

    getPerformanceItems() {
        return this.items;
    }

}