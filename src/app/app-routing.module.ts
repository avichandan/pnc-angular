import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformanceComponent} from './performance/performance.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
    {
        path:'', component: PerformanceComponent, pathMatch: 'full'
    },
    {
        path:  'test', component: TestComponent
    }
];

@NgModule ({
    imports: [
        RouterModule.forRoot(routes)
    ],

    exports: [RouterModule]
})

export class AppRoutingModule {}