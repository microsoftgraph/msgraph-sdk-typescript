import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SinglePropertySchema extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The name of the property.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The type of the property.
     */
    type?: string | undefined;
}
