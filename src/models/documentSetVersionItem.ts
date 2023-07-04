import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface DocumentSetVersionItem extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The unique identifier for the item.
     */
    itemId?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The title of the item.
     */
    title?: string | undefined;
    /**
     * The version ID of the item.
     */
    versionId?: string | undefined;
}
