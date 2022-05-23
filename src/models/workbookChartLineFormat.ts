import {Entity} from './entity';

export interface WorkbookChartLineFormat extends Entity{
    /** HTML color code representing the color of lines in the chart. */
    color?:string | undefined;
}
