import {Entity} from './entity';
import {WorkbookChartLegendFormat} from './workbookChartLegendFormat';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartLegend extends Entity, Parsable {
    /**
     * Represents the formatting of a chart legend, which includes fill and font formatting. Read-only.
     */
    format?: WorkbookChartLegendFormat | undefined;
    /**
     * Boolean value for whether the chart legend should overlap with the main body of the chart.
     */
    overlay?: boolean | undefined;
    /**
     * Represents the position of the legend on the chart. The possible values are: Top, Bottom, Left, Right, Corner, Custom.
     */
    position?: string | undefined;
    /**
     * A boolean value the represents the visibility of a ChartLegend object.
     */
    visible?: boolean | undefined;
}
