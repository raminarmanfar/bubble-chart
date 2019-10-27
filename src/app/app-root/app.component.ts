import { Component } from '@angular/core';
import { GraphOptions } from '../graph-options';
import { RowData } from '../row-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  graphOptions: GraphOptions<RowData> = new GraphOptions();

  categories: string[] = ['cate 1', 'cate 2', 'cate 3', 'cate 4', 'cate 5', 'cate 6', 'cate 7', 'cate 8'];

  teamMembers: RowData[] = [
    {
      title: 'Ali',
      cateWeights: [9, 0, 0, 0, 2, 8, 0, 0]
    },
    {
      title: 'Vali',
      cateWeights: [0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      title: 'Ramin',
      cateWeights: [0, 0, 17, 0, 0, 8, 0, 3]
    },
    {
      title: 'Amir',
      cateWeights: [9, 0, 0, 0, 4, 0, 0, 0]
    },
    {
      title: 'Hadi',
      cateWeights: [0, 0, 12, 0, 0, 0, 7, 0]
    },
    {
      title: 'Saber',
      cateWeights: [0, 7, 6, 0, 8, 0, 15, 0]
    }
  ];

  constructor() {
    this.graphOptions.rowsData = this.teamMembers;
    this.graphOptions.categories = this.categories;
  }

}
