import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app-root/app.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { BubbleChartModule } from 'bubble-chart';

@NgModule({
  declarations: [
    AppComponent,
    BubbleChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BubbleChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
