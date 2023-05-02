import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BaseDeltaFunctionResponse extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The OdataDeltaLink property */
    odataDeltaLink?: string | undefined;
    /** The OdataNextLink property */
    odataNextLink?: string | undefined;
}
