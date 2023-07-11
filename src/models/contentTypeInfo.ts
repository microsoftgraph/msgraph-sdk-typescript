import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ContentTypeInfo extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The ID of the content type.
     */
    id?: string | undefined;
    /**
     * The name of the content type.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
