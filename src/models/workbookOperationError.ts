import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface WorkbookOperationError extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The error code.
     */
    code?: string | undefined;
    /**
     * The innerError property
     */
    innerError?: WorkbookOperationError | undefined;
    /**
     * The error message.
     */
    message?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
