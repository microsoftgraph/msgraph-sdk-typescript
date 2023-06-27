import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface KeyValue extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Key for the key-value pair.
     */
    key?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Value for the key-value pair.
     */
    value?: string | undefined;
}
