import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Thumbnail extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The content stream for the thumbnail.
     */
    content?: string | undefined;
    /**
     * The height of the thumbnail, in pixels.
     */
    height?: number | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The unique identifier of the item that provided the thumbnail. This is only available when a folder thumbnail is requested.
     */
    sourceItemId?: string | undefined;
    /**
     * The URL used to fetch the thumbnail content.
     */
    url?: string | undefined;
    /**
     * The width of the thumbnail, in pixels.
     */
    width?: number | undefined;
}
