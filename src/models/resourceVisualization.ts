import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ResourceVisualization extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * A string describing where the item is stored. For example, the name of a SharePoint site or the user name identifying the owner of the OneDrive storing the item.
     */
    containerDisplayName?: string | undefined;
    /**
     * Can be used for filtering by the type of container in which the file is stored. Such as Site or OneDriveBusiness.
     */
    containerType?: string | undefined;
    /**
     * A path leading to the folder in which the item is stored.
     */
    containerWebUrl?: string | undefined;
    /**
     * The item's media type. Can be used for filtering for a specific type of file based on supported IANA Media Mime Types. Note that not all Media Mime Types are supported.
     */
    mediaType?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * A URL leading to the preview image for the item.
     */
    previewImageUrl?: string | undefined;
    /**
     * A preview text for the item.
     */
    previewText?: string | undefined;
    /**
     * The item's title text.
     */
    title?: string | undefined;
    /**
     * The item's media type. Can be used for filtering for a specific file based on a specific type. See below for supported types.
     */
    type?: string | undefined;
}
