import { Injectable, OnInit } from '@angular/core';
import { Branch } from '../models/branch-performance.interface';
import { branches } from '../models/branch-performance.model';



@Injectable()

export class BranchPerformanceListService {

    branches: Branch[];

    constructor() {
        this.branches = branches;
    }

    ngOnInit() {
    }

    getBranchesList() {
        return this.branches;
    }

}