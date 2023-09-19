import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface WorkbookSessionInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * ID of the workbook session.
     */
    id?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * true for persistent session. false for non-persistent session (view mode)
     */
    persistChanges?: boolean | undefined;
}
