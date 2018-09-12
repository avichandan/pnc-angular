import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import  { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component'
import { PerformanceComponent} from './performance/performance.component';
import { PerformanceGraphComponent } from './performance/performance-graph/performance-graph.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PerformanceComponent,
    PerformanceGraphComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
