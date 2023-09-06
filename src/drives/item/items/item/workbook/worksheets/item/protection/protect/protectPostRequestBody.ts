import { type WorkbookWorksheetProtectionOptions } from '../../../../../../../../../models/workbookWorksheetProtectionOptions';
import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface ProtectPostRequestBody extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The options property
     */
    options?: WorkbookWorksheetProtectionOptions | undefined;
}
