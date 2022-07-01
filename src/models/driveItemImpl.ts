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

/** Provides operations to manage the collection of application entities. */
export class DriveItemImpl extends BaseItemImpl implements DriveItem {
    /** Analytics about the view activities that took place on this item. */
    private _analytics?: ItemAnalytics | undefined;
    /** Audio metadata, if the item is an audio file. Read-only. Only on OneDrive Personal. */
    private _audio?: Audio | undefined;
    /** Bundle metadata, if the item is a bundle. Read-only. */
    private _bundle?: Bundle | undefined;
    /** Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable. */
    private _children?: DriveItem[] | undefined;
    /** The content stream, if the item represents a file. */
    private _content?: string | undefined;
    /** An eTag for the content of the item. This eTag is not changed if only the metadata is changed. Note This property is not returned if the item is a folder. Read-only. */
    private _cTag?: string | undefined;
    /** Information about the deleted state of the item. Read-only. */
    private _deleted?: Deleted | undefined;
    /** File metadata, if the item is a file. Read-only. */
    private _file?: File | undefined;
    /** File system information on client. Read-write. */
    private _fileSystemInfo?: FileSystemInfo | undefined;
    /** Folder metadata, if the item is a folder. Read-only. */
    private _folder?: Folder | undefined;
    /** Image metadata, if the item is an image. Read-only. */
    private _image?: Image | undefined;
    /** For drives in SharePoint, the associated document library list item. Read-only. Nullable. */
    private _listItem?: ListItem | undefined;
    /** Location metadata, if the item has location data. Read-only. */
    private _location?: GeoCoordinates | undefined;
    /** Malware metadata, if the item was detected to contain malware. Read-only. */
    private _malware?: Malware | undefined;
    /** If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only. */
    private _package?: Package | undefined;
    /** If present, indicates that indicates that one or more operations that may affect the state of the driveItem are pending completion. Read-only. */
    private _pendingOperations?: PendingOperations | undefined;
    /** The set of permissions for the item. Read-only. Nullable. */
    private _permissions?: Permission[] | undefined;
    /** Photo metadata, if the item is a photo. Read-only. */
    private _photo?: Photo | undefined;
    /** Provides information about the published or checked-out state of an item, in locations that support such actions. This property is not returned by default. Read-only. */
    private _publication?: PublicationFacet | undefined;
    /** Remote item data, if the item is shared from a drive other than the one being accessed. Read-only. */
    private _remoteItem?: RemoteItem | undefined;
    /** If this property is non-null, it indicates that the driveItem is the top-most driveItem in the drive. */
    private _root?: Root | undefined;
    /** Search metadata, if the item is from a search result. Read-only. */
    private _searchResult?: SearchResult | undefined;
    /** Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only. */
    private _shared?: Shared | undefined;
    /** Returns identifiers useful for SharePoint REST compatibility. Read-only. */
    private _sharepointIds?: SharepointIds | undefined;
    /** Size of the item in bytes. Read-only. */
    private _size?: number | undefined;
    /** If the current item is also available as a special folder, this facet is returned. Read-only. */
    private _specialFolder?: SpecialFolder | undefined;
    /** The set of subscriptions on the item. Only supported on the root of a drive. */
    private _subscriptions?: Subscription[] | undefined;
    /** Collection containing [ThumbnailSet][] objects associated with the item. For more info, see [getting thumbnails][]. Read-only. Nullable. */
    private _thumbnails?: ThumbnailSet[] | undefined;
    /** The list of previous versions of the item. For more info, see [getting previous versions][]. Read-only. Nullable. */
    private _versions?: DriveItemVersion[] | undefined;
    /** Video metadata, if the item is a video. Read-only. */
    private _video?: Video | undefined;
    /** WebDAV compatible URL for the item. */
    private _webDavUrl?: string | undefined;
    /** For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable. */
    private _workbook?: Workbook | undefined;
    /**
     * Gets the analytics property value. Analytics about the view activities that took place on this item.
     * @returns a ItemAnalyticsInterface
     */
    public get analytics() {
        return this._analytics;
    };
    /**
     * Sets the analytics property value. Analytics about the view activities that took place on this item.
     * @param value Value to set for the analytics property.
     */
    public set analytics(value: ItemAnalytics | undefined) {
        if(value) {
            this._analytics = value instanceof ItemAnalyticsImpl? value as ItemAnalyticsImpl: new ItemAnalyticsImpl(value);
        }
    };
    /**
     * Gets the audio property value. Audio metadata, if the item is an audio file. Read-only. Only on OneDrive Personal.
     * @returns a AudioInterface
     */
    public get audio() {
        return this._audio;
    };
    /**
     * Sets the audio property value. Audio metadata, if the item is an audio file. Read-only. Only on OneDrive Personal.
     * @param value Value to set for the audio property.
     */
    public set audio(value: Audio | undefined) {
        if(value) {
            this._audio = value instanceof AudioImpl? value as AudioImpl: new AudioImpl(value);
        }
    };
    /**
     * Gets the bundle property value. Bundle metadata, if the item is a bundle. Read-only.
     * @returns a BundleInterface
     */
    public get bundle() {
        return this._bundle;
    };
    /**
     * Sets the bundle property value. Bundle metadata, if the item is a bundle. Read-only.
     * @param value Value to set for the bundle property.
     */
    public set bundle(value: Bundle | undefined) {
        if(value) {
            this._bundle = value instanceof BundleImpl? value as BundleImpl: new BundleImpl(value);
        }
    };
    /**
     * Gets the children property value. Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable.
     * @returns a DriveItemInterface
     */
    public get children() {
        return this._children;
    };
    /**
     * Sets the children property value. Collection containing Item objects for the immediate children of Item. Only items representing folders have children. Read-only. Nullable.
     * @param value Value to set for the children property.
     */
    public set children(value: DriveItem[] | undefined) {
        if(value) {
            const childrenArrValue: DriveItemImpl[] = [];
            this.children?.forEach(element => {
                childrenArrValue.push((element instanceof DriveItemImpl? element as DriveItemImpl:new DriveItemImpl(element)));
            });
            this._children = childrenArrValue;
        }
    };
    /**
     * Instantiates a new driveItem and sets the default values.
     * @param driveItemParameterValue 
     */
    public constructor(driveItemParameterValue?: DriveItem | undefined) {
        super(driveItemParameterValue);
        this._analytics = driveItemParameterValue?.analytics;
        this._audio = driveItemParameterValue?.audio;
        this._bundle = driveItemParameterValue?.bundle;
        this._children = driveItemParameterValue?.children;
        this._content = driveItemParameterValue?.content;
        this._cTag = driveItemParameterValue?.cTag;
        this._deleted = driveItemParameterValue?.deleted;
        this._file = driveItemParameterValue?.file;
        this._fileSystemInfo = driveItemParameterValue?.fileSystemInfo;
        this._folder = driveItemParameterValue?.folder;
        this._image = driveItemParameterValue?.image;
        this._listItem = driveItemParameterValue?.listItem;
        this._location = driveItemParameterValue?.location;
        this._malware = driveItemParameterValue?.malware;
        this._package = driveItemParameterValue?.package;
        this._pendingOperations = driveItemParameterValue?.pendingOperations;
        this._permissions = driveItemParameterValue?.permissions;
        this._photo = driveItemParameterValue?.photo;
        this._publication = driveItemParameterValue?.publication;
        this._remoteItem = driveItemParameterValue?.remoteItem;
        this._root = driveItemParameterValue?.root;
        this._searchResult = driveItemParameterValue?.searchResult;
        this._shared = driveItemParameterValue?.shared;
        this._sharepointIds = driveItemParameterValue?.sharepointIds;
        this._size = driveItemParameterValue?.size;
        this._specialFolder = driveItemParameterValue?.specialFolder;
        this._subscriptions = driveItemParameterValue?.subscriptions;
        this._thumbnails = driveItemParameterValue?.thumbnails;
        this._versions = driveItemParameterValue?.versions;
        this._video = driveItemParameterValue?.video;
        this._webDavUrl = driveItemParameterValue?.webDavUrl;
        this._workbook = driveItemParameterValue?.workbook;
    };
    /**
     * Gets the content property value. The content stream, if the item represents a file.
     * @returns a binary
     */
    public get content() {
        return this._content;
    };
    /**
     * Sets the content property value. The content stream, if the item represents a file.
     * @param value Value to set for the content property.
     */
    public set content(value: string | undefined) {
        if(value) {
            this._content = value;
        }
    };
    /**
     * Gets the cTag property value. An eTag for the content of the item. This eTag is not changed if only the metadata is changed. Note This property is not returned if the item is a folder. Read-only.
     * @returns a string
     */
    public get cTag() {
        return this._cTag;
    };
    /**
     * Sets the cTag property value. An eTag for the content of the item. This eTag is not changed if only the metadata is changed. Note This property is not returned if the item is a folder. Read-only.
     * @param value Value to set for the cTag property.
     */
    public set cTag(value: string | undefined) {
        if(value) {
            this._cTag = value;
        }
    };
    /**
     * Gets the deleted property value. Information about the deleted state of the item. Read-only.
     * @returns a DeletedInterface
     */
    public get deleted() {
        return this._deleted;
    };
    /**
     * Sets the deleted property value. Information about the deleted state of the item. Read-only.
     * @param value Value to set for the deleted property.
     */
    public set deleted(value: Deleted | undefined) {
        if(value) {
            this._deleted = value instanceof DeletedImpl? value as DeletedImpl: new DeletedImpl(value);
        }
    };
    /**
     * Gets the file property value. File metadata, if the item is a file. Read-only.
     * @returns a FileInterface
     */
    public get file() {
        return this._file;
    };
    /**
     * Sets the file property value. File metadata, if the item is a file. Read-only.
     * @param value Value to set for the file property.
     */
    public set file(value: File | undefined) {
        if(value) {
            this._file = value instanceof FileImpl? value as FileImpl: new FileImpl(value);
        }
    };
    /**
     * Gets the fileSystemInfo property value. File system information on client. Read-write.
     * @returns a FileSystemInfoInterface
     */
    public get fileSystemInfo() {
        return this._fileSystemInfo;
    };
    /**
     * Sets the fileSystemInfo property value. File system information on client. Read-write.
     * @param value Value to set for the fileSystemInfo property.
     */
    public set fileSystemInfo(value: FileSystemInfo | undefined) {
        if(value) {
            this._fileSystemInfo = value instanceof FileSystemInfoImpl? value as FileSystemInfoImpl: new FileSystemInfoImpl(value);
        }
    };
    /**
     * Gets the folder property value. Folder metadata, if the item is a folder. Read-only.
     * @returns a FolderInterface
     */
    public get folder() {
        return this._folder;
    };
    /**
     * Sets the folder property value. Folder metadata, if the item is a folder. Read-only.
     * @param value Value to set for the folder property.
     */
    public set folder(value: Folder | undefined) {
        if(value) {
            this._folder = value instanceof FolderImpl? value as FolderImpl: new FolderImpl(value);
        }
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
     * Gets the image property value. Image metadata, if the item is an image. Read-only.
     * @returns a ImageInterface
     */
    public get image() {
        return this._image;
    };
    /**
     * Sets the image property value. Image metadata, if the item is an image. Read-only.
     * @param value Value to set for the image property.
     */
    public set image(value: Image | undefined) {
        if(value) {
            this._image = value instanceof ImageImpl? value as ImageImpl: new ImageImpl(value);
        }
    };
    /**
     * Gets the listItem property value. For drives in SharePoint, the associated document library list item. Read-only. Nullable.
     * @returns a ListItemInterface
     */
    public get listItem() {
        return this._listItem;
    };
    /**
     * Sets the listItem property value. For drives in SharePoint, the associated document library list item. Read-only. Nullable.
     * @param value Value to set for the listItem property.
     */
    public set listItem(value: ListItem | undefined) {
        if(value) {
            this._listItem = value instanceof ListItemImpl? value as ListItemImpl: new ListItemImpl(value);
        }
    };
    /**
     * Gets the location property value. Location metadata, if the item has location data. Read-only.
     * @returns a GeoCoordinatesInterface
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. Location metadata, if the item has location data. Read-only.
     * @param value Value to set for the location property.
     */
    public set location(value: GeoCoordinates | undefined) {
        if(value) {
            this._location = value instanceof GeoCoordinatesImpl? value as GeoCoordinatesImpl: new GeoCoordinatesImpl(value);
        }
    };
    /**
     * Gets the malware property value. Malware metadata, if the item was detected to contain malware. Read-only.
     * @returns a MalwareInterface
     */
    public get malware() {
        return this._malware;
    };
    /**
     * Sets the malware property value. Malware metadata, if the item was detected to contain malware. Read-only.
     * @param value Value to set for the malware property.
     */
    public set malware(value: Malware | undefined) {
        if(value) {
            this._malware = value instanceof MalwareImpl? value as MalwareImpl: new MalwareImpl(value);
        }
    };
    /**
     * Gets the package property value. If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only.
     * @returns a PackageInterface
     */
    public get package() {
        return this._package;
    };
    /**
     * Sets the package property value. If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only.
     * @param value Value to set for the package property.
     */
    public set package(value: Package | undefined) {
        if(value) {
            this._package = value instanceof PackageImpl? value as PackageImpl: new PackageImpl(value);
        }
    };
    /**
     * Gets the pendingOperations property value. If present, indicates that indicates that one or more operations that may affect the state of the driveItem are pending completion. Read-only.
     * @returns a PendingOperationsInterface
     */
    public get pendingOperations() {
        return this._pendingOperations;
    };
    /**
     * Sets the pendingOperations property value. If present, indicates that indicates that one or more operations that may affect the state of the driveItem are pending completion. Read-only.
     * @param value Value to set for the pendingOperations property.
     */
    public set pendingOperations(value: PendingOperations | undefined) {
        if(value) {
            this._pendingOperations = value instanceof PendingOperationsImpl? value as PendingOperationsImpl: new PendingOperationsImpl(value);
        }
    };
    /**
     * Gets the permissions property value. The set of permissions for the item. Read-only. Nullable.
     * @returns a PermissionInterface
     */
    public get permissions() {
        return this._permissions;
    };
    /**
     * Sets the permissions property value. The set of permissions for the item. Read-only. Nullable.
     * @param value Value to set for the permissions property.
     */
    public set permissions(value: Permission[] | undefined) {
        if(value) {
            const permissionsArrValue: PermissionImpl[] = [];
            this.permissions?.forEach(element => {
                permissionsArrValue.push((element instanceof PermissionImpl? element as PermissionImpl:new PermissionImpl(element)));
            });
            this._permissions = permissionsArrValue;
        }
    };
    /**
     * Gets the photo property value. Photo metadata, if the item is a photo. Read-only.
     * @returns a PhotoInterface
     */
    public get photo() {
        return this._photo;
    };
    /**
     * Sets the photo property value. Photo metadata, if the item is a photo. Read-only.
     * @param value Value to set for the photo property.
     */
    public set photo(value: Photo | undefined) {
        if(value) {
            this._photo = value instanceof PhotoImpl? value as PhotoImpl: new PhotoImpl(value);
        }
    };
    /**
     * Gets the publication property value. Provides information about the published or checked-out state of an item, in locations that support such actions. This property is not returned by default. Read-only.
     * @returns a PublicationFacetInterface
     */
    public get publication() {
        return this._publication;
    };
    /**
     * Sets the publication property value. Provides information about the published or checked-out state of an item, in locations that support such actions. This property is not returned by default. Read-only.
     * @param value Value to set for the publication property.
     */
    public set publication(value: PublicationFacet | undefined) {
        if(value) {
            this._publication = value instanceof PublicationFacetImpl? value as PublicationFacetImpl: new PublicationFacetImpl(value);
        }
    };
    /**
     * Gets the remoteItem property value. Remote item data, if the item is shared from a drive other than the one being accessed. Read-only.
     * @returns a RemoteItemInterface
     */
    public get remoteItem() {
        return this._remoteItem;
    };
    /**
     * Sets the remoteItem property value. Remote item data, if the item is shared from a drive other than the one being accessed. Read-only.
     * @param value Value to set for the remoteItem property.
     */
    public set remoteItem(value: RemoteItem | undefined) {
        if(value) {
            this._remoteItem = value instanceof RemoteItemImpl? value as RemoteItemImpl: new RemoteItemImpl(value);
        }
    };
    /**
     * Gets the root property value. If this property is non-null, it indicates that the driveItem is the top-most driveItem in the drive.
     * @returns a RootInterface
     */
    public get root() {
        return this._root;
    };
    /**
     * Sets the root property value. If this property is non-null, it indicates that the driveItem is the top-most driveItem in the drive.
     * @param value Value to set for the root property.
     */
    public set root(value: Root | undefined) {
        if(value) {
            this._root = value instanceof RootImpl? value as RootImpl: new RootImpl(value);
        }
    };
    /**
     * Gets the searchResult property value. Search metadata, if the item is from a search result. Read-only.
     * @returns a SearchResultInterface
     */
    public get searchResult() {
        return this._searchResult;
    };
    /**
     * Sets the searchResult property value. Search metadata, if the item is from a search result. Read-only.
     * @param value Value to set for the searchResult property.
     */
    public set searchResult(value: SearchResult | undefined) {
        if(value) {
            this._searchResult = value instanceof SearchResultImpl? value as SearchResultImpl: new SearchResultImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.analytics){
            writer.writeObjectValue<ItemAnalyticsImpl>("analytics", (this.analytics instanceof ItemAnalyticsImpl? this.analytics as ItemAnalyticsImpl: new ItemAnalyticsImpl(this.analytics)));
        }
        if(this.audio){
            writer.writeObjectValue<AudioImpl>("audio", (this.audio instanceof AudioImpl? this.audio as AudioImpl: new AudioImpl(this.audio)));
        }
        if(this.bundle){
            writer.writeObjectValue<BundleImpl>("bundle", (this.bundle instanceof BundleImpl? this.bundle as BundleImpl: new BundleImpl(this.bundle)));
        }
        if(this.children && this.children.length != 0){        const childrenArrValue: DriveItemImpl[] = [];
        this.children?.forEach(element => {
            childrenArrValue.push((element instanceof DriveItemImpl? element as DriveItemImpl:new DriveItemImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DriveItemImpl>("children", childrenArrValue);
        }
        if(this.content){
            writer.writeStringValue("content", this.content);
        }
        if(this.cTag){
            writer.writeStringValue("cTag", this.cTag);
        }
        if(this.deleted){
            writer.writeObjectValue<DeletedImpl>("deleted", (this.deleted instanceof DeletedImpl? this.deleted as DeletedImpl: new DeletedImpl(this.deleted)));
        }
        if(this.file){
            writer.writeObjectValue<FileImpl>("file", (this.file instanceof FileImpl? this.file as FileImpl: new FileImpl(this.file)));
        }
        if(this.fileSystemInfo){
            writer.writeObjectValue<FileSystemInfoImpl>("fileSystemInfo", (this.fileSystemInfo instanceof FileSystemInfoImpl? this.fileSystemInfo as FileSystemInfoImpl: new FileSystemInfoImpl(this.fileSystemInfo)));
        }
        if(this.folder){
            writer.writeObjectValue<FolderImpl>("folder", (this.folder instanceof FolderImpl? this.folder as FolderImpl: new FolderImpl(this.folder)));
        }
        if(this.image){
            writer.writeObjectValue<ImageImpl>("image", (this.image instanceof ImageImpl? this.image as ImageImpl: new ImageImpl(this.image)));
        }
        if(this.listItem){
            writer.writeObjectValue<ListItemImpl>("listItem", (this.listItem instanceof ListItemImpl? this.listItem as ListItemImpl: new ListItemImpl(this.listItem)));
        }
        if(this.location){
            writer.writeObjectValue<GeoCoordinatesImpl>("location", (this.location instanceof GeoCoordinatesImpl? this.location as GeoCoordinatesImpl: new GeoCoordinatesImpl(this.location)));
        }
        if(this.malware){
            writer.writeObjectValue<MalwareImpl>("malware", (this.malware instanceof MalwareImpl? this.malware as MalwareImpl: new MalwareImpl(this.malware)));
        }
        if(this.package){
            writer.writeObjectValue<PackageImpl>("package", (this.package instanceof PackageImpl? this.package as PackageImpl: new PackageImpl(this.package)));
        }
        if(this.pendingOperations){
            writer.writeObjectValue<PendingOperationsImpl>("pendingOperations", (this.pendingOperations instanceof PendingOperationsImpl? this.pendingOperations as PendingOperationsImpl: new PendingOperationsImpl(this.pendingOperations)));
        }
        if(this.permissions && this.permissions.length != 0){        const permissionsArrValue: PermissionImpl[] = [];
        this.permissions?.forEach(element => {
            permissionsArrValue.push((element instanceof PermissionImpl? element as PermissionImpl:new PermissionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<PermissionImpl>("permissions", permissionsArrValue);
        }
        if(this.photo){
            writer.writeObjectValue<PhotoImpl>("photo", (this.photo instanceof PhotoImpl? this.photo as PhotoImpl: new PhotoImpl(this.photo)));
        }
        if(this.publication){
            writer.writeObjectValue<PublicationFacetImpl>("publication", (this.publication instanceof PublicationFacetImpl? this.publication as PublicationFacetImpl: new PublicationFacetImpl(this.publication)));
        }
        if(this.remoteItem){
            writer.writeObjectValue<RemoteItemImpl>("remoteItem", (this.remoteItem instanceof RemoteItemImpl? this.remoteItem as RemoteItemImpl: new RemoteItemImpl(this.remoteItem)));
        }
        if(this.root){
            writer.writeObjectValue<RootImpl>("root", (this.root instanceof RootImpl? this.root as RootImpl: new RootImpl(this.root)));
        }
        if(this.searchResult){
            writer.writeObjectValue<SearchResultImpl>("searchResult", (this.searchResult instanceof SearchResultImpl? this.searchResult as SearchResultImpl: new SearchResultImpl(this.searchResult)));
        }
        if(this.shared){
            writer.writeObjectValue<SharedImpl>("shared", (this.shared instanceof SharedImpl? this.shared as SharedImpl: new SharedImpl(this.shared)));
        }
        if(this.sharepointIds){
            writer.writeObjectValue<SharepointIdsImpl>("sharepointIds", (this.sharepointIds instanceof SharepointIdsImpl? this.sharepointIds as SharepointIdsImpl: new SharepointIdsImpl(this.sharepointIds)));
        }
        if(this.size){
            writer.writeNumberValue("size", this.size);
        }
        if(this.specialFolder){
            writer.writeObjectValue<SpecialFolderImpl>("specialFolder", (this.specialFolder instanceof SpecialFolderImpl? this.specialFolder as SpecialFolderImpl: new SpecialFolderImpl(this.specialFolder)));
        }
        if(this.subscriptions && this.subscriptions.length != 0){        const subscriptionsArrValue: SubscriptionImpl[] = [];
        this.subscriptions?.forEach(element => {
            subscriptionsArrValue.push((element instanceof SubscriptionImpl? element as SubscriptionImpl:new SubscriptionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SubscriptionImpl>("subscriptions", subscriptionsArrValue);
        }
        if(this.thumbnails && this.thumbnails.length != 0){        const thumbnailsArrValue: ThumbnailSetImpl[] = [];
        this.thumbnails?.forEach(element => {
            thumbnailsArrValue.push((element instanceof ThumbnailSetImpl? element as ThumbnailSetImpl:new ThumbnailSetImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ThumbnailSetImpl>("thumbnails", thumbnailsArrValue);
        }
        if(this.versions && this.versions.length != 0){        const versionsArrValue: DriveItemVersionImpl[] = [];
        this.versions?.forEach(element => {
            versionsArrValue.push((element instanceof DriveItemVersionImpl? element as DriveItemVersionImpl:new DriveItemVersionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<DriveItemVersionImpl>("versions", versionsArrValue);
        }
        if(this.video){
            writer.writeObjectValue<VideoImpl>("video", (this.video instanceof VideoImpl? this.video as VideoImpl: new VideoImpl(this.video)));
        }
        if(this.webDavUrl){
            writer.writeStringValue("webDavUrl", this.webDavUrl);
        }
        if(this.workbook){
            writer.writeObjectValue<WorkbookImpl>("workbook", (this.workbook instanceof WorkbookImpl? this.workbook as WorkbookImpl: new WorkbookImpl(this.workbook)));
        }
    };
    /**
     * Gets the shared property value. Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only.
     * @returns a SharedInterface
     */
    public get shared() {
        return this._shared;
    };
    /**
     * Sets the shared property value. Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only.
     * @param value Value to set for the shared property.
     */
    public set shared(value: Shared | undefined) {
        if(value) {
            this._shared = value instanceof SharedImpl? value as SharedImpl: new SharedImpl(value);
        }
    };
    /**
     * Gets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
     * @returns a SharepointIdsInterface
     */
    public get sharepointIds() {
        return this._sharepointIds;
    };
    /**
     * Sets the sharepointIds property value. Returns identifiers useful for SharePoint REST compatibility. Read-only.
     * @param value Value to set for the sharepointIds property.
     */
    public set sharepointIds(value: SharepointIds | undefined) {
        if(value) {
            this._sharepointIds = value instanceof SharepointIdsImpl? value as SharepointIdsImpl: new SharepointIdsImpl(value);
        }
    };
    /**
     * Gets the size property value. Size of the item in bytes. Read-only.
     * @returns a int64
     */
    public get size() {
        return this._size;
    };
    /**
     * Sets the size property value. Size of the item in bytes. Read-only.
     * @param value Value to set for the size property.
     */
    public set size(value: number | undefined) {
        if(value) {
            this._size = value;
        }
    };
    /**
     * Gets the specialFolder property value. If the current item is also available as a special folder, this facet is returned. Read-only.
     * @returns a SpecialFolderInterface
     */
    public get specialFolder() {
        return this._specialFolder;
    };
    /**
     * Sets the specialFolder property value. If the current item is also available as a special folder, this facet is returned. Read-only.
     * @param value Value to set for the specialFolder property.
     */
    public set specialFolder(value: SpecialFolder | undefined) {
        if(value) {
            this._specialFolder = value instanceof SpecialFolderImpl? value as SpecialFolderImpl: new SpecialFolderImpl(value);
        }
    };
    /**
     * Gets the subscriptions property value. The set of subscriptions on the item. Only supported on the root of a drive.
     * @returns a SubscriptionInterface
     */
    public get subscriptions() {
        return this._subscriptions;
    };
    /**
     * Sets the subscriptions property value. The set of subscriptions on the item. Only supported on the root of a drive.
     * @param value Value to set for the subscriptions property.
     */
    public set subscriptions(value: Subscription[] | undefined) {
        if(value) {
            const subscriptionsArrValue: SubscriptionImpl[] = [];
            this.subscriptions?.forEach(element => {
                subscriptionsArrValue.push((element instanceof SubscriptionImpl? element as SubscriptionImpl:new SubscriptionImpl(element)));
            });
            this._subscriptions = subscriptionsArrValue;
        }
    };
    /**
     * Gets the thumbnails property value. Collection containing [ThumbnailSet][] objects associated with the item. For more info, see [getting thumbnails][]. Read-only. Nullable.
     * @returns a ThumbnailSetInterface
     */
    public get thumbnails() {
        return this._thumbnails;
    };
    /**
     * Sets the thumbnails property value. Collection containing [ThumbnailSet][] objects associated with the item. For more info, see [getting thumbnails][]. Read-only. Nullable.
     * @param value Value to set for the thumbnails property.
     */
    public set thumbnails(value: ThumbnailSet[] | undefined) {
        if(value) {
            const thumbnailsArrValue: ThumbnailSetImpl[] = [];
            this.thumbnails?.forEach(element => {
                thumbnailsArrValue.push((element instanceof ThumbnailSetImpl? element as ThumbnailSetImpl:new ThumbnailSetImpl(element)));
            });
            this._thumbnails = thumbnailsArrValue;
        }
    };
    /**
     * Gets the versions property value. The list of previous versions of the item. For more info, see [getting previous versions][]. Read-only. Nullable.
     * @returns a DriveItemVersionInterface
     */
    public get versions() {
        return this._versions;
    };
    /**
     * Sets the versions property value. The list of previous versions of the item. For more info, see [getting previous versions][]. Read-only. Nullable.
     * @param value Value to set for the versions property.
     */
    public set versions(value: DriveItemVersion[] | undefined) {
        if(value) {
            const versionsArrValue: DriveItemVersionImpl[] = [];
            this.versions?.forEach(element => {
                versionsArrValue.push((element instanceof DriveItemVersionImpl? element as DriveItemVersionImpl:new DriveItemVersionImpl(element)));
            });
            this._versions = versionsArrValue;
        }
    };
    /**
     * Gets the video property value. Video metadata, if the item is a video. Read-only.
     * @returns a VideoInterface
     */
    public get video() {
        return this._video;
    };
    /**
     * Sets the video property value. Video metadata, if the item is a video. Read-only.
     * @param value Value to set for the video property.
     */
    public set video(value: Video | undefined) {
        if(value) {
            this._video = value instanceof VideoImpl? value as VideoImpl: new VideoImpl(value);
        }
    };
    /**
     * Gets the webDavUrl property value. WebDAV compatible URL for the item.
     * @returns a string
     */
    public get webDavUrl() {
        return this._webDavUrl;
    };
    /**
     * Sets the webDavUrl property value. WebDAV compatible URL for the item.
     * @param value Value to set for the webDavUrl property.
     */
    public set webDavUrl(value: string | undefined) {
        if(value) {
            this._webDavUrl = value;
        }
    };
    /**
     * Gets the workbook property value. For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @returns a WorkbookInterface
     */
    public get workbook() {
        return this._workbook;
    };
    /**
     * Sets the workbook property value. For files that are Excel spreadsheets, accesses the workbook API to work with the spreadsheet's contents. Nullable.
     * @param value Value to set for the workbook property.
     */
    public set workbook(value: Workbook | undefined) {
        if(value) {
            this._workbook = value instanceof WorkbookImpl? value as WorkbookImpl: new WorkbookImpl(value);
        }
    };
}
