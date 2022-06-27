import {Entity} from './entity';
import {WorkbookChartAxis} from './workbookChartAxis';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartAxes extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents the category axis in a chart. Read-only. */
    categoryAxis?: WorkbookChartAxis | undefined;
    /** Represents the series axis of a 3-dimensional chart. Read-only. */
    seriesAxis?: WorkbookChartAxis | undefined;
    /** Represents the value axis in an axis. Read-only. */
    valueAxis?: WorkbookChartAxis | undefined;
}
