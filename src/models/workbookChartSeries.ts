import type {Entity} from './entity';
import type {WorkbookChartPoint} from './workbookChartPoint';
import type {WorkbookChartSeriesFormat} from './workbookChartSeriesFormat';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartSeries extends Entity, Parsable {
    /**
     * Represents the formatting of a chart series, which includes fill and line formatting. Read-only.
     */
    format?: WorkbookChartSeriesFormat | undefined;
    /**
     * Represents the name of a series in a chart.
     */
    name?: string | undefined;
    /**
     * Represents a collection of all points in the series. Read-only.
     */
    points?: WorkbookChartPoint[] | undefined;
}
