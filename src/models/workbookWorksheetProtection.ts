import {Entity} from './entity';
import {WorkbookWorksheetProtectionOptions} from './workbookWorksheetProtectionOptions';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookWorksheetProtection extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Sheet protection options. Read-only. */
    options?: WorkbookWorksheetProtectionOptions | undefined;
    /** Indicates if the worksheet is protected.  Read-only. */
    protected?: boolean | undefined;
}
