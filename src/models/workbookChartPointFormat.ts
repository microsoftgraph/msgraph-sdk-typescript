import {Entity} from './entity';
import {WorkbookChartFill} from './workbookChartFill';

export interface WorkbookChartPointFormat extends Entity{
    /** Represents the fill format of a chart, which includes background formating information. Read-only. */
    fill?:WorkbookChartFill | undefined;
}
