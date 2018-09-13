 import { Component, OnInit, ViewEncapsulation } from '@angular/core';
 import { Branch } from '../models/branch-performance.interface';
 import {branches } from '../models/branch-performance.model';

@Component({
    selector: 'app-performance',
    templateUrl: './performance.component.html',
    styleUrls: ['./performance.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class PerformanceComponent implements OnInit {

    branches: Branch[] = []
    constructor() { }

    ngOnInit() {
        this.branches = branches;
     }
}