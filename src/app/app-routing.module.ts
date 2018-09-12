import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformanceComponent} from './performance/performance.component';

const routes: Routes = [
    {
        path:'', component: PerformanceComponent, pathMatch: 'full'
    }
];

@NgModule ({
    imports: [
        RouterModule.forRoot(routes)
    ],

    exports: [RouterModule]
})

export class AppRoutingModule {}