import type {BaseItem} from './baseItem';
import type {ContentTypeInfo} from './contentTypeInfo';
import type {DocumentSetVersion} from './documentSetVersion';
import type {DriveItem} from './driveItem';
import type {FieldValueSet} from './fieldValueSet';
import type {ItemAnalytics} from './itemAnalytics';
import type {ListItemVersion} from './listItemVersion';
import type {SharepointIds} from './sharepointIds';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ListItem extends BaseItem, Parsable {
    /**
     * Analytics about the view activities that took place on this item.
     */
    analytics?: ItemAnalytics | undefined;
    /**
     * The content type of this list item
     */
    contentType?: ContentTypeInfo | undefined;
    /**
     * Version information for a document set version created by a user.
     */
    documentSetVersions?: DocumentSetVersion[] | undefined;
    /**
     * For document libraries, the driveItem relationship exposes the listItem as a [driveItem][]
     */
    driveItem?: DriveItem | undefined;
    /**
     * The values of the columns set on this list item.
     */
    fields?: FieldValueSet | undefined;
    /**
     * Returns identifiers useful for SharePoint REST compatibility. Read-only.
     */
    sharepointIds?: SharepointIds | undefined;
    /**
     * The list of previous versions of the list item.
     */
    versions?: ListItemVersion[] | undefined;
}
