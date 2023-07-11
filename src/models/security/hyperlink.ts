import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Hyperlink extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The name for this hyperlink.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The URL for this hyperlink.
     */
    url?: string | undefined;
}
