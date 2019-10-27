import { Component, Input } from '@angular/core';
import { RowData } from './row-data';
import { GraphOptions } from './graph-options';

@Component({
  selector: 'lib-bubble-chart',
  templateUrl: './bubble-chart.component.html',
styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent<T extends RowData> {
  @Input() gOptions: GraphOptions<T>;

  get rowsLen() { return this.gOptions.rowsData.length; }
  get catesLen() { return this.gOptions.categories.length; }
  get graphHeight() { return this.gOptions.spaceBetweenRows * this.rowsLen; }
  rowLineY(index: number) { return this.gOptions.spaceBetweenRows * index + this.gOptions.additionalHeightSpaceOnTop; }
  cateLineX(index: number) { return this.gOptions.spaceBetweenCates * (index + 1) + this.gOptions.spaceforRowTitles; }
  getRotationRate(index: number) { return (index + 1) * 0; }
}
