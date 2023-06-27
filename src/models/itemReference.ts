import {SharepointIds} from './sharepointIds';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ItemReference extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Unique identifier of the drive instance that contains the driveItem. Only returned if the item is located in a [drive][]. Read-only.
     */
    driveId?: string | undefined;
    /**
     * Identifies the type of drive. Only returned if the item is located in a [drive][]. See [drive][] resource for values.
     */
    driveType?: string | undefined;
    /**
     * Unique identifier of the driveItem in the drive or a listItem in a list. Read-only.
     */
    id?: string | undefined;
    /**
     * The name of the item being referenced. Read-only.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * Path that can be used to navigate to the item. Read-only.
     */
    path?: string | undefined;
    /**
     * A unique identifier for a shared resource that can be accessed via the [Shares][] API.
     */
    shareId?: string | undefined;
    /**
     * Returns identifiers useful for SharePoint REST compatibility. Read-only.
     */
    sharepointIds?: SharepointIds | undefined;
    /**
     * For OneDrive for Business and SharePoint, this property represents the ID of the site that contains the parent document library of the driveItem resource or the parent list of the listItem resource. The value is the same as the id property of that [site][] resource. It is an opaque string that consists of three identifiers of the site. For OneDrive, this property is not populated.
     */
    siteId?: string | undefined;
}
