 import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-performance',
    templateUrl: './performance.component.html',
    styleUrls: ['./performance.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class PerformanceComponent implements OnInit {
    displayIcon:boolean = false;
    constructor() { }

    ngOnInit() {
     }

     showIcon2() {
         this.displayIcon = true;
     }
     showIcon1() {
        this.displayIcon = false;
    }
}