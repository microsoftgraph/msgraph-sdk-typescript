import {Entity} from './entity';
import {WorkbookChartAxis} from './workbookChartAxis';

export interface WorkbookChartAxes extends Entity{
    /** Represents the category axis in a chart. Read-only. */
    categoryAxis?:WorkbookChartAxis | undefined;
    /** Represents the series axis of a 3-dimensional chart. Read-only. */
    seriesAxis?:WorkbookChartAxis | undefined;
    /** Represents the value axis in an axis. Read-only. */
    valueAxis?:WorkbookChartAxis | undefined;
}
