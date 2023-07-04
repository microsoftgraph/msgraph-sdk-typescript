import {BaseItem} from './baseItem';
import {ColumnDefinition} from './columnDefinition';
import {ContentType} from './contentType';
import {Drive} from './drive';
import {ListInfo} from './listInfo';
import {ListItem} from './listItem';
import {RichLongRunningOperation} from './richLongRunningOperation';
import {SharepointIds} from './sharepointIds';
import {Subscription} from './subscription';
import {SystemFacet} from './systemFacet';
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
