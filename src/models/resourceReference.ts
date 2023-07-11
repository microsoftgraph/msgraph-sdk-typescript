import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ResourceReference extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The item's unique identifier.
     */
    id?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * A string value that can be used to classify the item, such as 'microsoft.graph.driveItem'
     */
    type?: string | undefined;
    /**
     * A URL leading to the referenced item.
     */
    webUrl?: string | undefined;
}
