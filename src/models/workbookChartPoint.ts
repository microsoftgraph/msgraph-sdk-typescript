import {Entity} from './entity';
import {Json} from './json';
import {WorkbookChartPointFormat} from './workbookChartPointFormat';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartPoint extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Encapsulates the format properties chart point. Read-only. */
    format?: WorkbookChartPointFormat | undefined;
    /** Returns the value of a chart point. Read-only. */
    value?: Json | undefined;
}
