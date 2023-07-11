import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AgreementFileData extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Data that represents the terms of use PDF document. Read-only.
     */
    data?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
