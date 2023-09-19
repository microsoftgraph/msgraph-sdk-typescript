import { type AdditionalDataHolder, type Parsable } from '@microsoft/kiota-abstractions';

export interface ExtensionSchemaProperty extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The name of the strongly typed property defined as part of a schema extension.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The type of the property that is defined as part of a schema extension.  Allowed values are Binary, Boolean, DateTime, Integer or String. See the table in the Supported property data types section for more details.
     */
    type?: string | undefined;
}
