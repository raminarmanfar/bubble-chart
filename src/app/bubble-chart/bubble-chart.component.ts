import { Component, Input } from '@angular/core';
import { GraphOptions } from '../graph-options';
import { RowData } from '../row-data';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss']
})
export class BubbleChartComponent {
  @Input() gOptions: GraphOptions<RowData>;

  get rowsLen() { return this.gOptions.rowsData.length; }
  get catesLen() { return this.gOptions.categories.length; }
  get graphHeight() { return this.gOptions.spaceBetweenRows * this.rowsLen; }
  rowLineY(index: number) { return this.gOptions.spaceBetweenRows * index + this.gOptions.additionalHeightSpaceOnTop; }
  cateLineX(index: number) { return this.gOptions.spaceBetweenCates * (index + 1) + this.gOptions.spaceforRowTitles; }
  getRotationRate(index: number) { return (index + 1) * 0; }
}
