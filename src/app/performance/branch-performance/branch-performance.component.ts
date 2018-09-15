import { Component, OnInit, Input } from '@angular/core';
import { Branch } from '../../models/branch-performance.interface';

@Component ({
    selector: 'app-branch-performance',
    templateUrl: './branch-performance.component.html',
    styleUrls: ['./branch-performance.component.scss']
})

export class BranchPerformanceComponent implements OnInit {

    @Input('branchPassed') branch: Branch;
    
    constructor(){}

    ngOnInit(){

    }
}