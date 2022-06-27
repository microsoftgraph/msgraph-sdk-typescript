import {BaseItem} from './baseItem';
import {ContentTypeInfo} from './contentTypeInfo';
import {DriveItem} from './driveItem';
import {FieldValueSet} from './fieldValueSet';
import {ItemAnalytics} from './itemAnalytics';
import {ListItemVersion} from './listItemVersion';
import {SharepointIds} from './sharepointIds';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ListItem extends Partial<AdditionalDataHolder>, BaseItem, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Analytics about the view activities that took place on this item. */
    analytics?: ItemAnalytics | undefined;
    /** The content type of this list item */
    contentType?: ContentTypeInfo | undefined;
    /** For document libraries, the driveItem relationship exposes the listItem as a [driveItem][] */
    driveItem?: DriveItem | undefined;
    /** The values of the columns set on this list item. */
    fields?: FieldValueSet | undefined;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only. */
    sharepointIds?: SharepointIds | undefined;
    /** The list of previous versions of the list item. */
    versions?: ListItemVersion[] | undefined;
}
