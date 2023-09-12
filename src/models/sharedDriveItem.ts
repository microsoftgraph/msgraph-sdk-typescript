import { type BaseItem } from './baseItem';
import { type DriveItem } from './driveItem';
import { type IdentitySet } from './identitySet';
import { type List } from './list';
import { type ListItem } from './listItem';
import { type Permission } from './permission';
import { type Site } from './site';
import { type Parsable } from '@microsoft/kiota-abstractions';

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
