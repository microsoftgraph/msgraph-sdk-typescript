import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ResultInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The result code.
     */
    code?: number | undefined;
    /**
     * The message.
     */
    message?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The result sub-code.
     */
    subcode?: number | undefined;
}
