import {Entity} from './entity';
import {WorkbookChartPoint} from './workbookChartPoint';
import {WorkbookChartSeriesFormat} from './workbookChartSeriesFormat';

export interface WorkbookChartSeries extends Entity{
    /** Represents the formatting of a chart series, which includes fill and line formatting. Read-only. */
    format?:WorkbookChartSeriesFormat | undefined;
    /** Represents the name of a series in a chart. */
    name?:string | undefined;
    /** Represents a collection of all points in the series. Read-only. */
    points?:WorkbookChartPoint[] | undefined;
}
