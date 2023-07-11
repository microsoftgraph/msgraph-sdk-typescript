import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface StringKeyStringValuePair extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Key.
     */
    key?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Value.
     */
    value?: string | undefined;
}
