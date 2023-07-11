import {BaseItem} from './baseItem';
import {DriveItem} from './driveItem';
import {IdentitySet} from './identitySet';
import {List} from './list';
import {ListItem} from './listItem';
import {Permission} from './permission';
import {Site} from './site';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface SharedDriveItem extends BaseItem, Parsable {
    /**
     * Used to access the underlying driveItem
     */
    driveItem?: DriveItem | undefined;
    /**
     * All driveItems contained in the sharing root. This collection cannot be enumerated.
     */
    items?: DriveItem[] | undefined;
    /**
     * Used to access the underlying list
     */
    list?: List | undefined;
    /**
     * Used to access the underlying listItem
     */
    listItem?: ListItem | undefined;
    /**
     * Information about the owner of the shared item being referenced.
     */
    owner?: IdentitySet | undefined;
    /**
     * Used to access the permission representing the underlying sharing link
     */
    permission?: Permission | undefined;
    /**
     * Used to access the underlying driveItem. Deprecated -- use driveItem instead.
     */
    root?: DriveItem | undefined;
    /**
     * Used to access the underlying site
     */
    site?: Site | undefined;
}
