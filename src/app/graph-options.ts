import { RowData } from './row-data';

export class GraphOptions<T extends RowData> {
    cateTextColor = 'red';
    rowTextColor = 'darkblue';

    spaceforRowTitles = 100;
    additionalHeightSpaceOnTop = 50;

    spaceBetweenTitlesAndGrid = 5;
    spaceBetweenCateAndGrid = 5;

    spaceBetweenRows = 70;
    spaceBetweenCates = 80;

    bubbleSizeRate = 4;

    rowsData: T[];
    categories: string[];
}
