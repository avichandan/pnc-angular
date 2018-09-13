import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import  { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import { FooterComponent  } from './footer/footer.component';
import { PerformanceComponent} from './performance/performance.component';
import { PerformanceGraphComponent } from './performance/performance-graph/performance-graph.component';
import { PerformancelistComponent } from './performance/performance-graph/performance-list/performance-list.component';
import { PerformanceItemComponent } from './performance/performance-graph/performance-item/performance.item';
import { PerformanceSelectedItemComponent } from './performance/performance-graph/performance-selected-item/performance-selected-item';
import { BranchPerformanceComponent } from './performance/branch-performance/branch-performance.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PerformanceComponent,
    PerformanceGraphComponent,
    PerformancelistComponent,
    PerformanceItemComponent,
    PerformanceSelectedItemComponent,
    BranchPerformanceComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
