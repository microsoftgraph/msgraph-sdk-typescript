import type {Audio} from './audio';
import type {BaseItem} from './baseItem';
import type {Bundle} from './bundle';
import type {Deleted} from './deleted';
import type {DriveItemVersion} from './driveItemVersion';
import type {File} from './file';
import type {FileSystemInfo} from './fileSystemInfo';
import type {Folder} from './folder';
import type {GeoCoordinates} from './geoCoordinates';
import type {Image} from './image';
import type {ItemAnalytics} from './itemAnalytics';
import type {ListItem} from './listItem';
import type {Malware} from './malware';
import type {PackageEscaped} from './packageEscaped';
import type {PendingOperations} from './pendingOperations';
import type {Permission} from './permission';
import type {Photo} from './photo';
import type {PublicationFacet} from './publicationFacet';
import type {RemoteItem} from './remoteItem';
import type {Root} from './root';
import type {SearchResult} from './searchResult';
import type {Shared} from './shared';
import type {SharepointIds} from './sharepointIds';
import type {SpecialFolder} from './specialFolder';
import type {Subscription} from './subscription';
import type {ThumbnailSet} from './thumbnailSet';
import type {Video} from './video';
import type {Workbook} from './workbook';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DriveItem extends BaseItem, Parsable {
    /**
     * Analytics about the view activities that took place on this item.
     */
    analytics?: ItemAnalytics | undefined;
    /**
     * Audio metadata, if the item is an audio file. Read-only. Read-only. Only on OneDrive Personal.
     */
    audio?: Audio | undefined;
    /**
     * Bundle metadata, if the item is a bundle. Read-only.
     */
    bundle?: Bundle | undefined;
    /**
     * Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable.
     */
    children?: DriveItem[] | undefined;
    /**
     * The content stream, if the item represents a file.
     */
    content?: string | undefined;
    /**
     * An eTag for the content of the item. This eTag is not changed if only the metadata is changed. Note This property is not returned if the item is a folder. Read-only.
     */
    cTag?: string | undefined;
    /**
     * Information about the deleted state of the item. Read-only.
     */
    deleted?: Deleted | undefined;
    /**
     * File metadata, if the item is a file. Read-only.
     */
    file?: File | undefined;
    /**
     * File system information on client. Read-write.
     */
    fileSystemInfo?: FileSystemInfo | undefined;
    /**
     * Folder metadata, if the item is a folder. Read-only.
     */
    folder?: Folder | undefined;
    /**
     * Image metadata, if the item is an image. Read-only.
     */
    image?: Image | undefined;
    /**
     * For drives in SharePoint, the associated document library list item. Read-only. Nullable.
     */
    listItem?: ListItem | undefined;
    /**
     * Location metadata, if the item has location data. Read-only.
     */
    location?: GeoCoordinates | undefined;
    /**
     * Malware metadata, if the item was detected to contain malware. Read-only.
     */
    malware?: Malware | undefined;
    /**
     * If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only.
     */
    packageEscaped?: PackageEscaped | undefined;
    /**
     * If present, indicates that one or more operations that might affect the state of the driveItem are pending completion. Read-only.
     */
    pendingOperations?: PendingOperations | undefined;
    /**
     * The set of permissions for the item. Read-only. Nullable.
     */
    permissions?: Permission[] | undefined;
    /**
     * Photo metadata, if the item is a photo. Read-only.
     */
    photo?: Photo | undefined;
    /**
     * Provides information about the published or checked-out state of an item, in locations that support such actions. This property is not returned by default. Read-only.
     */
    publication?: PublicationFacet | undefined;
    /**
     * Remote item data, if the item is shared from a drive other than the one being accessed. Read-only.
     */
    remoteItem?: RemoteItem | undefined;
    /**
     * If this property is non-null, it indicates that the driveItem is the top-most driveItem in the drive.
     */
    root?: Root | undefined;
    /**
     * Search metadata, if the item is from a search result. Read-only.
     */
    searchResult?: SearchResult | undefined;
    /**
     * Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only.
     */
    shared?: Shared | undefined;
    /**
     * Returns identifiers useful for SharePoint REST compatibility. Read-only.
     */
    sharepointIds?: SharepointIds | undefined;
    /**
     * Size of the item in bytes. Read-only.
     */
    size?: number | undefined;
    /**
     * If the current item is also available as a special folder, this facet is returned. Read-only.
     */
    specialFolder?: SpecialFolder | undefined;
    /**
     * The set of subscriptions on the item. Only supported on the root of a drive.
     */
    subscriptions?: Subscription[] | undefined;
    /**
     * Collection containing [ThumbnailSet][] objects associated with the item. For more info, see [getting thumbnails][]. Read-only. Nullable.
     */
    thumbnails?: ThumbnailSet[] | undefined;
    /**
     * The list of previous versions of the item. For more info, see [getting previous versions][]. Read-only. Nullable.
     */
    versions?: DriveItemVersion[] | undefined;
    /**
     * Video metadata, if the item is a video. Read-only.
     */
    video?: Video | undefined;
    /**
     * WebDAV compatible URL for the item.
     */
    webDavUrl?: string | undefined;
    /**
     * For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     */
    workbook?: Workbook | undefined;
}
