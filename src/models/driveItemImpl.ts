import {Audio} from './audio';
import {Bundle} from './bundle';
import {createAudioFromDiscriminatorValue} from './createAudioFromDiscriminatorValue';
import {createBundleFromDiscriminatorValue} from './createBundleFromDiscriminatorValue';
import {createDeletedFromDiscriminatorValue} from './createDeletedFromDiscriminatorValue';
import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createDriveItemVersionFromDiscriminatorValue} from './createDriveItemVersionFromDiscriminatorValue';
import {createFileFromDiscriminatorValue} from './createFileFromDiscriminatorValue';
import {createFileSystemInfoFromDiscriminatorValue} from './createFileSystemInfoFromDiscriminatorValue';
import {createFolderFromDiscriminatorValue} from './createFolderFromDiscriminatorValue';
import {createGeoCoordinatesFromDiscriminatorValue} from './createGeoCoordinatesFromDiscriminatorValue';
import {createImageFromDiscriminatorValue} from './createImageFromDiscriminatorValue';
import {createItemAnalyticsFromDiscriminatorValue} from './createItemAnalyticsFromDiscriminatorValue';
import {createListItemFromDiscriminatorValue} from './createListItemFromDiscriminatorValue';
import {createMalwareFromDiscriminatorValue} from './createMalwareFromDiscriminatorValue';
import {createPackageFromDiscriminatorValue} from './createPackageFromDiscriminatorValue';
import {createPendingOperationsFromDiscriminatorValue} from './createPendingOperationsFromDiscriminatorValue';
import {createPermissionFromDiscriminatorValue} from './createPermissionFromDiscriminatorValue';
import {createPhotoFromDiscriminatorValue} from './createPhotoFromDiscriminatorValue';
import {createPublicationFacetFromDiscriminatorValue} from './createPublicationFacetFromDiscriminatorValue';
import {createRemoteItemFromDiscriminatorValue} from './createRemoteItemFromDiscriminatorValue';
import {createRootFromDiscriminatorValue} from './createRootFromDiscriminatorValue';
import {createSearchResultFromDiscriminatorValue} from './createSearchResultFromDiscriminatorValue';
import {createSharedFromDiscriminatorValue} from './createSharedFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {createSpecialFolderFromDiscriminatorValue} from './createSpecialFolderFromDiscriminatorValue';
import {createSubscriptionFromDiscriminatorValue} from './createSubscriptionFromDiscriminatorValue';
import {createThumbnailSetFromDiscriminatorValue} from './createThumbnailSetFromDiscriminatorValue';
import {createVideoFromDiscriminatorValue} from './createVideoFromDiscriminatorValue';
import {createWorkbookFromDiscriminatorValue} from './createWorkbookFromDiscriminatorValue';
import {Deleted} from './deleted';
import {DriveItem} from './driveItem';
import {DriveItemVersion} from './driveItemVersion';
import {File} from './file';
import {FileSystemInfo} from './fileSystemInfo';
import {Folder} from './folder';
import {GeoCoordinates} from './geoCoordinates';
import {Image} from './image';
import {AudioImpl, BaseItemImpl, BundleImpl, DeletedImpl, DriveItemVersionImpl, FileImpl, FileSystemInfoImpl, FolderImpl, GeoCoordinatesImpl, ImageImpl, ItemAnalyticsImpl, ListItemImpl, MalwareImpl, PackageImpl, PendingOperationsImpl, PermissionImpl, PhotoImpl, PublicationFacetImpl, RemoteItemImpl, RootImpl, SearchResultImpl, SharedImpl, SharepointIdsImpl, SpecialFolderImpl, SubscriptionImpl, ThumbnailSetImpl, VideoImpl, WorkbookImpl} from './index';
import {ItemAnalytics} from './itemAnalytics';
import {ListItem} from './listItem';
import {Malware} from './malware';
import {Package} from './package';
import {PendingOperations} from './pendingOperations';
import {Permission} from './permission';
import {Photo} from './photo';
import {PublicationFacet} from './publicationFacet';
import {RemoteItem} from './remoteItem';
import {Root} from './root';
import {SearchResult} from './searchResult';
import {Shared} from './shared';
import {SharepointIds} from './sharepointIds';
import {SpecialFolder} from './specialFolder';
import {Subscription} from './subscription';
import {ThumbnailSet} from './thumbnailSet';
import {Video} from './video';
import {Workbook} from './workbook';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the drive singleton. */
export class DriveItemImpl extends BaseItemImpl implements DriveItem, Parsable {
    /** Analytics about the view activities that took place on this item. */
    public analytics?: ItemAnalytics | undefined;
    /** Audio metadata, if the item is an audio file. Read-only. Only on OneDrive Personal. */
    public audio?: Audio | undefined;
    /** Bundle metadata, if the item is a bundle. Read-only. */
    public bundle?: Bundle | undefined;
    /** Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable. */
    public children?: DriveItem[] | undefined;
    /** The content stream, if the item represents a file. */
    public content?: string | undefined;
    /** An eTag for the content of the item. This eTag is not changed if only the metadata is changed. Note This property is not returned if the item is a folder. Read-only. */
    public cTag?: string | undefined;
    /** Information about the deleted state of the item. Read-only. */
    public deleted?: Deleted | undefined;
    /** File metadata, if the item is a file. Read-only. */
    public file?: File | undefined;
    /** File system information on client. Read-write. */
    public fileSystemInfo?: FileSystemInfo | undefined;
    /** Folder metadata, if the item is a folder. Read-only. */
    public folder?: Folder | undefined;
    /** Image metadata, if the item is an image. Read-only. */
    public image?: Image | undefined;
    /** For drives in SharePoint, the associated document library list item. Read-only. Nullable. */
    public listItem?: ListItem | undefined;
    /** Location metadata, if the item has location data. Read-only. */
    public location?: GeoCoordinates | undefined;
    /** Malware metadata, if the item was detected to contain malware. Read-only. */
    public malware?: Malware | undefined;
    /** If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only. */
    public package?: Package | undefined;
    /** If present, indicates that indicates that one or more operations that may affect the state of the driveItem are pending completion. Read-only. */
    public pendingOperations?: PendingOperations | undefined;
    /** The set of permissions for the item. Read-only. Nullable. */
    public permissions?: Permission[] | undefined;
    /** Photo metadata, if the item is a photo. Read-only. */
    public photo?: Photo | undefined;
    /** Provides information about the published or checked-out state of an item, in locations that support such actions. This property is not returned by default. Read-only. */
    public publication?: PublicationFacet | undefined;
    /** Remote item data, if the item is shared from a drive other than the one being accessed. Read-only. */
    public remoteItem?: RemoteItem | undefined;
    /** If this property is non-null, it indicates that the driveItem is the top-most driveItem in the drive. */
    public root?: Root | undefined;
    /** Search metadata, if the item is from a search result. Read-only. */
    public searchResult?: SearchResult | undefined;
    /** Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only. */
    public shared?: Shared | undefined;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only. */
    public sharepointIds?: SharepointIds | undefined;
    /** Size of the item in bytes. Read-only. */
    public size?: number | undefined;
    /** If the current item is also available as a special folder, this facet is returned. Read-only. */
    public specialFolder?: SpecialFolder | undefined;
    /** The set of subscriptions on the item. Only supported on the root of a drive. */
    public subscriptions?: Subscription[] | undefined;
    /** Collection containing [ThumbnailSet][] objects associated with the item. For more info, see [getting thumbnails][]. Read-only. Nullable. */
    public thumbnails?: ThumbnailSet[] | undefined;
    /** The list of previous versions of the item. For more info, see [getting previous versions][]. Read-only. Nullable. */
    public versions?: DriveItemVersion[] | undefined;
    /** Video metadata, if the item is a video. Read-only. */
    public video?: Video | undefined;
    /** WebDAV compatible URL for the item. */
    public webDavUrl?: string | undefined;
    /** For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable. */
    public workbook?: Workbook | undefined;
    /**
     * Instantiates a new driveItem and sets the default values.
     * @param driveItemParameterValue 
     */
    public constructor(driveItemParameterValue?: DriveItem | undefined) {
        super();
        this.analytics = driveItemParameterValue?.analytics ;
        this.audio = driveItemParameterValue?.audio ;
        this.bundle = driveItemParameterValue?.bundle ;
        this.children = driveItemParameterValue?.children ;
        this.content = driveItemParameterValue?.content ;
        this.cTag = driveItemParameterValue?.cTag ;
        this.deleted = driveItemParameterValue?.deleted ;
        this.file = driveItemParameterValue?.file ;
        this.fileSystemInfo = driveItemParameterValue?.fileSystemInfo ;
        this.folder = driveItemParameterValue?.folder ;
        this.image = driveItemParameterValue?.image ;
        this.listItem = driveItemParameterValue?.listItem ;
        this.location = driveItemParameterValue?.location ;
        this.malware = driveItemParameterValue?.malware ;
        this.package = driveItemParameterValue?.package ;
        this.pendingOperations = driveItemParameterValue?.pendingOperations ;
        this.permissions = driveItemParameterValue?.permissions ;
        this.photo = driveItemParameterValue?.photo ;
        this.publication = driveItemParameterValue?.publication ;
        this.remoteItem = driveItemParameterValue?.remoteItem ;
        this.root = driveItemParameterValue?.root ;
        this.searchResult = driveItemParameterValue?.searchResult ;
        this.shared = driveItemParameterValue?.shared ;
        this.sharepointIds = driveItemParameterValue?.sharepointIds ;
        this.size = driveItemParameterValue?.size ;
        this.specialFolder = driveItemParameterValue?.specialFolder ;
        this.subscriptions = driveItemParameterValue?.subscriptions ;
        this.thumbnails = driveItemParameterValue?.thumbnails ;
        this.versions = driveItemParameterValue?.versions ;
        this.video = driveItemParameterValue?.video ;
        this.webDavUrl = driveItemParameterValue?.webDavUrl ;
        this.workbook = driveItemParameterValue?.workbook ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "analytics": n => { this.analytics = n.getObjectValue<ItemAnalyticsImpl>(createItemAnalyticsFromDiscriminatorValue); },
            "audio": n => { this.audio = n.getObjectValue<AudioImpl>(createAudioFromDiscriminatorValue); },
            "bundle": n => { this.bundle = n.getObjectValue<BundleImpl>(createBundleFromDiscriminatorValue); },
            "children": n => { this.children = n.getCollectionOfObjectValues<DriveItemImpl>(createDriveItemFromDiscriminatorValue); },
            "content": n => { this.content = n.getStringValue(); },
            "cTag": n => { this.cTag = n.getStringValue(); },
            "deleted": n => { this.deleted = n.getObjectValue<DeletedImpl>(createDeletedFromDiscriminatorValue); },
            "file": n => { this.file = n.getObjectValue<FileImpl>(createFileFromDiscriminatorValue); },
            "fileSystemInfo": n => { this.fileSystemInfo = n.getObjectValue<FileSystemInfoImpl>(createFileSystemInfoFromDiscriminatorValue); },
            "folder": n => { this.folder = n.getObjectValue<FolderImpl>(createFolderFromDiscriminatorValue); },
            "image": n => { this.image = n.getObjectValue<ImageImpl>(createImageFromDiscriminatorValue); },
            "listItem": n => { this.listItem = n.getObjectValue<ListItemImpl>(createListItemFromDiscriminatorValue); },
            "location": n => { this.location = n.getObjectValue<GeoCoordinatesImpl>(createGeoCoordinatesFromDiscriminatorValue); },
            "malware": n => { this.malware = n.getObjectValue<MalwareImpl>(createMalwareFromDiscriminatorValue); },
            "package": n => { this.package = n.getObjectValue<PackageImpl>(createPackageFromDiscriminatorValue); },
            "pendingOperations": n => { this.pendingOperations = n.getObjectValue<PendingOperationsImpl>(createPendingOperationsFromDiscriminatorValue); },
            "permissions": n => { this.permissions = n.getCollectionOfObjectValues<PermissionImpl>(createPermissionFromDiscriminatorValue); },
            "photo": n => { this.photo = n.getObjectValue<PhotoImpl>(createPhotoFromDiscriminatorValue); },
            "publication": n => { this.publication = n.getObjectValue<PublicationFacetImpl>(createPublicationFacetFromDiscriminatorValue); },
            "remoteItem": n => { this.remoteItem = n.getObjectValue<RemoteItemImpl>(createRemoteItemFromDiscriminatorValue); },
            "root": n => { this.root = n.getObjectValue<RootImpl>(createRootFromDiscriminatorValue); },
            "searchResult": n => { this.searchResult = n.getObjectValue<SearchResultImpl>(createSearchResultFromDiscriminatorValue); },
            "shared": n => { this.shared = n.getObjectValue<SharedImpl>(createSharedFromDiscriminatorValue); },
            "sharepointIds": n => { this.sharepointIds = n.getObjectValue<SharepointIdsImpl>(createSharepointIdsFromDiscriminatorValue); },
            "size": n => { this.size = n.getNumberValue(); },
            "specialFolder": n => { this.specialFolder = n.getObjectValue<SpecialFolderImpl>(createSpecialFolderFromDiscriminatorValue); },
            "subscriptions": n => { this.subscriptions = n.getCollectionOfObjectValues<SubscriptionImpl>(createSubscriptionFromDiscriminatorValue); },
            "thumbnails": n => { this.thumbnails = n.getCollectionOfObjectValues<ThumbnailSetImpl>(createThumbnailSetFromDiscriminatorValue); },
            "versions": n => { this.versions = n.getCollectionOfObjectValues<DriveItemVersionImpl>(createDriveItemVersionFromDiscriminatorValue); },
            "video": n => { this.video = n.getObjectValue<VideoImpl>(createVideoFromDiscriminatorValue); },
            "webDavUrl": n => { this.webDavUrl = n.getStringValue(); },
            "workbook": n => { this.workbook = n.getObjectValue<WorkbookImpl>(createWorkbookFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.analytics){
        writer.writeObjectValue<ItemAnalyticsImpl>("analytics", new ItemAnalyticsImpl(this.analytics));
        }
        if(this.audio){
        writer.writeObjectValue<AudioImpl>("audio", new AudioImpl(this.audio));
        }
        if(this.bundle){
        writer.writeObjectValue<BundleImpl>("bundle", new BundleImpl(this.bundle));
        }
        if(this.children && this.children.length != 0){        const childrenArrValue: DriveItemImpl[] = []; this.children?.forEach(element => {childrenArrValue.push(new DriveItemImpl(element));});
        writer.writeCollectionOfObjectValues<DriveItemImpl>("children", childrenArrValue);
        }
        if(this.content){
        writer.writeStringValue("content", this.content);
        }
        if(this.cTag){
        writer.writeStringValue("cTag", this.cTag);
        }
        if(this.deleted){
        writer.writeObjectValue<DeletedImpl>("deleted", new DeletedImpl(this.deleted));
        }
        if(this.file){
        writer.writeObjectValue<FileImpl>("file", new FileImpl(this.file));
        }
        if(this.fileSystemInfo){
        writer.writeObjectValue<FileSystemInfoImpl>("fileSystemInfo", new FileSystemInfoImpl(this.fileSystemInfo));
        }
        if(this.folder){
        writer.writeObjectValue<FolderImpl>("folder", new FolderImpl(this.folder));
        }
        if(this.image){
        writer.writeObjectValue<ImageImpl>("image", new ImageImpl(this.image));
        }
        if(this.listItem){
        writer.writeObjectValue<ListItemImpl>("listItem", new ListItemImpl(this.listItem));
        }
        if(this.location){
        writer.writeObjectValue<GeoCoordinatesImpl>("location", new GeoCoordinatesImpl(this.location));
        }
        if(this.malware){
        writer.writeObjectValue<MalwareImpl>("malware", new MalwareImpl(this.malware));
        }
        if(this.package){
        writer.writeObjectValue<PackageImpl>("package", new PackageImpl(this.package));
        }
        if(this.pendingOperations){
        writer.writeObjectValue<PendingOperationsImpl>("pendingOperations", new PendingOperationsImpl(this.pendingOperations));
        }
        if(this.permissions && this.permissions.length != 0){        const permissionsArrValue: PermissionImpl[] = []; this.permissions?.forEach(element => {permissionsArrValue.push(new PermissionImpl(element));});
        writer.writeCollectionOfObjectValues<PermissionImpl>("permissions", permissionsArrValue);
        }
        if(this.photo){
        writer.writeObjectValue<PhotoImpl>("photo", new PhotoImpl(this.photo));
        }
        if(this.publication){
        writer.writeObjectValue<PublicationFacetImpl>("publication", new PublicationFacetImpl(this.publication));
        }
        if(this.remoteItem){
        writer.writeObjectValue<RemoteItemImpl>("remoteItem", new RemoteItemImpl(this.remoteItem));
        }
        if(this.root){
        writer.writeObjectValue<RootImpl>("root", new RootImpl(this.root));
        }
        if(this.searchResult){
        writer.writeObjectValue<SearchResultImpl>("searchResult", new SearchResultImpl(this.searchResult));
        }
        if(this.shared){
        writer.writeObjectValue<SharedImpl>("shared", new SharedImpl(this.shared));
        }
        if(this.sharepointIds){
        writer.writeObjectValue<SharepointIdsImpl>("sharepointIds", new SharepointIdsImpl(this.sharepointIds));
        }
        if(this.size){
        writer.writeNumberValue("size", this.size);
        }
        if(this.specialFolder){
        writer.writeObjectValue<SpecialFolderImpl>("specialFolder", new SpecialFolderImpl(this.specialFolder));
        }
        if(this.subscriptions && this.subscriptions.length != 0){        const subscriptionsArrValue: SubscriptionImpl[] = []; this.subscriptions?.forEach(element => {subscriptionsArrValue.push(new SubscriptionImpl(element));});
        writer.writeCollectionOfObjectValues<SubscriptionImpl>("subscriptions", subscriptionsArrValue);
        }
        if(this.thumbnails && this.thumbnails.length != 0){        const thumbnailsArrValue: ThumbnailSetImpl[] = []; this.thumbnails?.forEach(element => {thumbnailsArrValue.push(new ThumbnailSetImpl(element));});
        writer.writeCollectionOfObjectValues<ThumbnailSetImpl>("thumbnails", thumbnailsArrValue);
        }
        if(this.versions && this.versions.length != 0){        const versionsArrValue: DriveItemVersionImpl[] = []; this.versions?.forEach(element => {versionsArrValue.push(new DriveItemVersionImpl(element));});
        writer.writeCollectionOfObjectValues<DriveItemVersionImpl>("versions", versionsArrValue);
        }
        if(this.video){
        writer.writeObjectValue<VideoImpl>("video", new VideoImpl(this.video));
        }
        if(this.webDavUrl){
        writer.writeStringValue("webDavUrl", this.webDavUrl);
        }
        if(this.workbook){
        writer.writeObjectValue<WorkbookImpl>("workbook", new WorkbookImpl(this.workbook));
        }
    };
}
