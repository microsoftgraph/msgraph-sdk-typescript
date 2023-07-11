import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface SharepointIds extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * The unique identifier (guid) for the item's list in SharePoint.
     */
    listId?: string | undefined;
    /**
     * An integer identifier for the item within the containing list.
     */
    listItemId?: string | undefined;
    /**
     * The unique identifier (guid) for the item within OneDrive for Business or a SharePoint site.
     */
    listItemUniqueId?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * The unique identifier (guid) for the item's site collection (SPSite).
     */
    siteId?: string | undefined;
    /**
     * The SharePoint URL for the site that contains the item.
     */
    siteUrl?: string | undefined;
    /**
     * The unique identifier (guid) for the tenancy.
     */
    tenantId?: string | undefined;
    /**
     * The unique identifier (guid) for the item's site (SPWeb).
     */
    webId?: string | undefined;
}
