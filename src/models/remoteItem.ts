import {File} from './file';
import {FileSystemInfo} from './fileSystemInfo';
import {Folder} from './folder';
import {IdentitySet} from './identitySet';
import {Image} from './image';
import {ItemReference} from './itemReference';
import {PackageEscaped} from './packageEscaped';
import {Shared} from './shared';
import {SharepointIds} from './sharepointIds';
import {SpecialFolder} from './specialFolder';
import {Video} from './video';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RemoteItem extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Identity of the user, device, and application which created the item. Read-only.
     */
    createdBy?: IdentitySet | undefined;
    /**
     * Date and time of item creation. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * Indicates that the remote item is a file. Read-only.
     */
    file?: File | undefined;
    /**
     * Information about the remote item from the local file system. Read-only.
     */
    fileSystemInfo?: FileSystemInfo | undefined;
    /**
     * Indicates that the remote item is a folder. Read-only.
     */
    folder?: Folder | undefined;
    /**
     * Unique identifier for the remote item in its drive. Read-only.
     */
    id?: string | undefined;
    /**
     * Image metadata, if the item is an image. Read-only.
     */
    image?: Image | undefined;
    /**
     * Identity of the user, device, and application which last modified the item. Read-only.
     */
    lastModifiedBy?: IdentitySet | undefined;
    /**
     * Date and time the item was last modified. Read-only.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * Optional. Filename of the remote item. Read-only.
     */
    name?: string | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
    /**
     * If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only.
     */
    packageEscaped?: PackageEscaped | undefined;
    /**
     * Properties of the parent of the remote item. Read-only.
     */
    parentReference?: ItemReference | undefined;
    /**
     * Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only.
     */
    shared?: Shared | undefined;
    /**
     * Provides interop between items in OneDrive for Business and SharePoint with the full set of item identifiers. Read-only.
     */
    sharepointIds?: SharepointIds | undefined;
    /**
     * Size of the remote item. Read-only.
     */
    size?: number | undefined;
    /**
     * If the current item is also available as a special folder, this facet is returned. Read-only.
     */
    specialFolder?: SpecialFolder | undefined;
    /**
     * Video metadata, if the item is a video. Read-only.
     */
    video?: Video | undefined;
    /**
     * DAV compatible URL for the item.
     */
    webDavUrl?: string | undefined;
    /**
     * URL that displays the resource in the browser. Read-only.
     */
    webUrl?: string | undefined;
}
