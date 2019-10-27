import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BubbleChartComponent } from './bubble-chart.component';



@NgModule({
  declarations: [BubbleChartComponent],
  imports: [
    BrowserModule
  ],
  exports: [BubbleChartComponent]
})
export class BubbleChartModule { }
