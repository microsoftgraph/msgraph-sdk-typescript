import {BaseItem} from './baseItem';
import {DriveItem} from './driveItem';
import {IdentitySet} from './identitySet';
import {List} from './list';
import {Quota} from './quota';
import {SharepointIds} from './sharepointIds';
import {SystemFacet} from './systemFacet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Drive extends BaseItem, Parsable {
    /**
     * Collection of [bundles][bundle] (albums and multi-select-shared sets of items). Only in personal OneDrive.
     */
    bundles?: DriveItem[] | undefined;
    /**
     * Describes the type of drive represented by this resource. OneDrive personal drives will return personal. OneDrive for Business will return business. SharePoint document libraries will return documentLibrary. Read-only.
     */
    driveType?: string | undefined;
    /**
     * The list of items the user is following. Only in OneDrive for Business.
     */
    following?: DriveItem[] | undefined;
    /**
     * All items contained in the drive. Read-only. Nullable.
     */
    items?: DriveItem[] | undefined;
    /**
     * For drives in SharePoint, the underlying document library list. Read-only. Nullable.
     */
    list?: List | undefined;
    /**
     * Optional. The user account that owns the drive. Read-only.
     */
    owner?: IdentitySet | undefined;
    /**
     * Optional. Information about the drive's storage space quota. Read-only.
     */
    quota?: Quota | undefined;
    /**
     * The root folder of the drive. Read-only.
     */
    root?: DriveItem | undefined;
    /**
     * The sharePointIds property
     */
    sharePointIds?: SharepointIds | undefined;
    /**
     * Collection of common folders available in OneDrive. Read-only. Nullable.
     */
    special?: DriveItem[] | undefined;
    /**
     * If present, indicates that this is a system-managed drive. Read-only.
     */
    system?: SystemFacet | undefined;
}
