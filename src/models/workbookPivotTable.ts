import {Entity} from './entity';
import {WorkbookWorksheet} from './workbookWorksheet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookPivotTable extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Name of the PivotTable. */
    name?: string | undefined;
    /** The worksheet containing the current PivotTable. Read-only. */
    worksheet?: WorkbookWorksheet | undefined;
}
