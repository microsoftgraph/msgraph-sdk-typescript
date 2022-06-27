import {Entity} from './entity';
import {WorkbookChartLineFormat} from './workbookChartLineFormat';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookChartGridlinesFormat extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Represents chart line formatting. Read-only. */
    line?: WorkbookChartLineFormat | undefined;
}
