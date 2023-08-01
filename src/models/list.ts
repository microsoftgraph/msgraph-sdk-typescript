import type {BaseItem} from './baseItem';
import type {ColumnDefinition} from './columnDefinition';
import type {ContentType} from './contentType';
import type {Drive} from './drive';
import type {ListInfo} from './listInfo';
import type {ListItem} from './listItem';
import type {RichLongRunningOperation} from './richLongRunningOperation';
import type {SharepointIds} from './sharepointIds';
import type {Subscription} from './subscription';
import type {SystemFacet} from './systemFacet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface List extends BaseItem, Parsable {
    /**
     * The collection of field definitions for this list.
     */
    columns?: ColumnDefinition[] | undefined;
    /**
     * The collection of content types present in this list.
     */
    contentTypes?: ContentType[] | undefined;
    /**
     * The displayable title of the list.
     */
    displayName?: string | undefined;
    /**
     * Only present on document libraries. Allows access to the list as a [drive][] resource with [driveItems][driveItem].
     */
    drive?: Drive | undefined;
    /**
     * All items contained in the list.
     */
    items?: ListItem[] | undefined;
    /**
     * Provides additional details about the list.
     */
    list?: ListInfo | undefined;
    /**
     * The collection of long-running operations on the list.
     */
    operations?: RichLongRunningOperation[] | undefined;
    /**
     * Returns identifiers useful for SharePoint REST compatibility. Read-only.
     */
    sharepointIds?: SharepointIds | undefined;
    /**
     * The set of subscriptions on the list.
     */
    subscriptions?: Subscription[] | undefined;
    /**
     * If present, indicates that this is a system-managed list. Read-only.
     */
    system?: SystemFacet | undefined;
}
