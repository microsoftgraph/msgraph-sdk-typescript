import {Entity} from './entity';
import {WorkbookChartLegendFormat} from './workbookChartLegendFormat';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartLegend extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents the formatting of a chart legend, which includes fill and font formatting. Read-only. */
    format?: WorkbookChartLegendFormat | undefined;
    /** Boolean value for whether the chart legend should overlap with the main body of the chart. */
    overlay?: boolean | undefined;
    /** Represents the position of the legend on the chart. The possible values are: Top, Bottom, Left, Right, Corner, Custom. */
    position?: string | undefined;
    /** A boolean value the represents the visibility of a ChartLegend object. */
    visible?: boolean | undefined;
}
