import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-performance-list',
    templateUrl: './performance-list.component.html',
    styleUrls: ['./performance-list.component.css']
})

export class PerformancelistComponent implements OnInit {

    items = ['1', '2', '3', '4'];
    constructor() { }

    ngOnInit() { }
}