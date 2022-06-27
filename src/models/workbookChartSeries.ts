import {Entity} from './entity';
import {WorkbookChartPoint} from './workbookChartPoint';
import {WorkbookChartSeriesFormat} from './workbookChartSeriesFormat';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartSeries extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents the formatting of a chart series, which includes fill and line formatting. Read-only. */
    format?: WorkbookChartSeriesFormat | undefined;
    /** Represents the name of a series in a chart. */
    name?: string | undefined;
    /** Represents a collection of all points in the series. Read-only. */
    points?: WorkbookChartPoint[] | undefined;
}
