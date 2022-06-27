import {Entity} from './entity';
import {WorkbookChartFill} from './workbookChartFill';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartPointFormat extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents the fill format of a chart, which includes background formating information. Read-only. */
    fill?: WorkbookChartFill | undefined;
}
