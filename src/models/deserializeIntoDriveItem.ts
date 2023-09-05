import { type Audio } from './audio';
import { type Bundle } from './bundle';
import { createAudioFromDiscriminatorValue } from './createAudioFromDiscriminatorValue';
import { createBundleFromDiscriminatorValue } from './createBundleFromDiscriminatorValue';
import { createDeletedFromDiscriminatorValue } from './createDeletedFromDiscriminatorValue';
import { createDriveItemFromDiscriminatorValue } from './createDriveItemFromDiscriminatorValue';
import { createDriveItemVersionFromDiscriminatorValue } from './createDriveItemVersionFromDiscriminatorValue';
import { createFileFromDiscriminatorValue } from './createFileFromDiscriminatorValue';
import { createFileSystemInfoFromDiscriminatorValue } from './createFileSystemInfoFromDiscriminatorValue';
import { createFolderFromDiscriminatorValue } from './createFolderFromDiscriminatorValue';
import { createGeoCoordinatesFromDiscriminatorValue } from './createGeoCoordinatesFromDiscriminatorValue';
import { createImageFromDiscriminatorValue } from './createImageFromDiscriminatorValue';
import { createItemAnalyticsFromDiscriminatorValue } from './createItemAnalyticsFromDiscriminatorValue';
import { createListItemFromDiscriminatorValue } from './createListItemFromDiscriminatorValue';
import { createMalwareFromDiscriminatorValue } from './createMalwareFromDiscriminatorValue';
import { createPackageEscapedFromDiscriminatorValue } from './createPackageEscapedFromDiscriminatorValue';
import { createPendingOperationsFromDiscriminatorValue } from './createPendingOperationsFromDiscriminatorValue';
import { createPermissionFromDiscriminatorValue } from './createPermissionFromDiscriminatorValue';
import { createPhotoFromDiscriminatorValue } from './createPhotoFromDiscriminatorValue';
import { createPublicationFacetFromDiscriminatorValue } from './createPublicationFacetFromDiscriminatorValue';
import { createRemoteItemFromDiscriminatorValue } from './createRemoteItemFromDiscriminatorValue';
import { createRootFromDiscriminatorValue } from './createRootFromDiscriminatorValue';
import { createSearchResultFromDiscriminatorValue } from './createSearchResultFromDiscriminatorValue';
import { createSharedFromDiscriminatorValue } from './createSharedFromDiscriminatorValue';
import { createSharepointIdsFromDiscriminatorValue } from './createSharepointIdsFromDiscriminatorValue';
import { createSpecialFolderFromDiscriminatorValue } from './createSpecialFolderFromDiscriminatorValue';
import { createSubscriptionFromDiscriminatorValue } from './createSubscriptionFromDiscriminatorValue';
import { createThumbnailSetFromDiscriminatorValue } from './createThumbnailSetFromDiscriminatorValue';
import { createVideoFromDiscriminatorValue } from './createVideoFromDiscriminatorValue';
import { createWorkbookFromDiscriminatorValue } from './createWorkbookFromDiscriminatorValue';
import { type Deleted } from './deleted';
import { deserializeIntoBaseItem } from './deserializeIntoBaseItem';
import { type DriveItem } from './driveItem';
import { type DriveItemVersion } from './driveItemVersion';
import { type File } from './file';
import { type FileSystemInfo } from './fileSystemInfo';
import { type Folder } from './folder';
import { type GeoCoordinates } from './geoCoordinates';
import { type Image } from './image';
import { type ItemAnalytics } from './itemAnalytics';
import { type ListItem } from './listItem';
import { type Malware } from './malware';
import { type PackageEscaped } from './packageEscaped';
import { type PendingOperations } from './pendingOperations';
import { type Permission } from './permission';
import { type Photo } from './photo';
import { type PublicationFacet } from './publicationFacet';
import { type RemoteItem } from './remoteItem';
import { type Root } from './root';
import { type SearchResult } from './searchResult';
import { serializeAudio } from './serializeAudio';
import { serializeBundle } from './serializeBundle';
import { serializeDeleted } from './serializeDeleted';
import { serializeDriveItem } from './serializeDriveItem';
import { serializeDriveItemVersion } from './serializeDriveItemVersion';
import { serializeFile } from './serializeFile';
import { serializeFileSystemInfo } from './serializeFileSystemInfo';
import { serializeFolder } from './serializeFolder';
import { serializeGeoCoordinates } from './serializeGeoCoordinates';
import { serializeImage } from './serializeImage';
import { serializeItemAnalytics } from './serializeItemAnalytics';
import { serializeListItem } from './serializeListItem';
import { serializeMalware } from './serializeMalware';
import { serializePackageEscaped } from './serializePackageEscaped';
import { serializePendingOperations } from './serializePendingOperations';
import { serializePermission } from './serializePermission';
import { serializePhoto } from './serializePhoto';
import { serializePublicationFacet } from './serializePublicationFacet';
import { serializeRemoteItem } from './serializeRemoteItem';
import { serializeRoot } from './serializeRoot';
import { serializeSearchResult } from './serializeSearchResult';
import { serializeShared } from './serializeShared';
import { serializeSharepointIds } from './serializeSharepointIds';
import { serializeSpecialFolder } from './serializeSpecialFolder';
import { serializeSubscription } from './serializeSubscription';
import { serializeThumbnailSet } from './serializeThumbnailSet';
import { serializeVideo } from './serializeVideo';
import { serializeWorkbook } from './serializeWorkbook';
import { type Shared } from './shared';
import { type SharepointIds } from './sharepointIds';
import { type SpecialFolder } from './specialFolder';
import { type Subscription } from './subscription';
import { type ThumbnailSet } from './thumbnailSet';
import { type Video } from './video';
import { type Workbook } from './workbook';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoDriveItem(driveItem: DriveItem | undefined = {} as DriveItem) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseItem(driveItem),
        "analytics": n => { driveItem.analytics = n.getObjectValue<ItemAnalytics>(createItemAnalyticsFromDiscriminatorValue); },
        "audio": n => { driveItem.audio = n.getObjectValue<Audio>(createAudioFromDiscriminatorValue); },
        "bundle": n => { driveItem.bundle = n.getObjectValue<Bundle>(createBundleFromDiscriminatorValue); },
        "children": n => { driveItem.children = n.getCollectionOfObjectValues<DriveItem>(createDriveItemFromDiscriminatorValue); },
        "content": n => { driveItem.content = n.getStringValue(); },
        "cTag": n => { driveItem.cTag = n.getStringValue(); },
        "deleted": n => { driveItem.deleted = n.getObjectValue<Deleted>(createDeletedFromDiscriminatorValue); },
        "file": n => { driveItem.file = n.getObjectValue<File>(createFileFromDiscriminatorValue); },
        "fileSystemInfo": n => { driveItem.fileSystemInfo = n.getObjectValue<FileSystemInfo>(createFileSystemInfoFromDiscriminatorValue); },
        "folder": n => { driveItem.folder = n.getObjectValue<Folder>(createFolderFromDiscriminatorValue); },
        "image": n => { driveItem.image = n.getObjectValue<Image>(createImageFromDiscriminatorValue); },
        "listItem": n => { driveItem.listItem = n.getObjectValue<ListItem>(createListItemFromDiscriminatorValue); },
        "location": n => { driveItem.location = n.getObjectValue<GeoCoordinates>(createGeoCoordinatesFromDiscriminatorValue); },
        "malware": n => { driveItem.malware = n.getObjectValue<Malware>(createMalwareFromDiscriminatorValue); },
        "package": n => { driveItem.packageEscaped = n.getObjectValue<PackageEscaped>(createPackageEscapedFromDiscriminatorValue); },
        "pendingOperations": n => { driveItem.pendingOperations = n.getObjectValue<PendingOperations>(createPendingOperationsFromDiscriminatorValue); },
        "permissions": n => { driveItem.permissions = n.getCollectionOfObjectValues<Permission>(createPermissionFromDiscriminatorValue); },
        "photo": n => { driveItem.photo = n.getObjectValue<Photo>(createPhotoFromDiscriminatorValue); },
        "publication": n => { driveItem.publication = n.getObjectValue<PublicationFacet>(createPublicationFacetFromDiscriminatorValue); },
        "remoteItem": n => { driveItem.remoteItem = n.getObjectValue<RemoteItem>(createRemoteItemFromDiscriminatorValue); },
        "root": n => { driveItem.root = n.getObjectValue<Root>(createRootFromDiscriminatorValue); },
        "searchResult": n => { driveItem.searchResult = n.getObjectValue<SearchResult>(createSearchResultFromDiscriminatorValue); },
        "shared": n => { driveItem.shared = n.getObjectValue<Shared>(createSharedFromDiscriminatorValue); },
        "sharepointIds": n => { driveItem.sharepointIds = n.getObjectValue<SharepointIds>(createSharepointIdsFromDiscriminatorValue); },
        "size": n => { driveItem.size = n.getNumberValue(); },
        "specialFolder": n => { driveItem.specialFolder = n.getObjectValue<SpecialFolder>(createSpecialFolderFromDiscriminatorValue); },
        "subscriptions": n => { driveItem.subscriptions = n.getCollectionOfObjectValues<Subscription>(createSubscriptionFromDiscriminatorValue); },
        "thumbnails": n => { driveItem.thumbnails = n.getCollectionOfObjectValues<ThumbnailSet>(createThumbnailSetFromDiscriminatorValue); },
        "versions": n => { driveItem.versions = n.getCollectionOfObjectValues<DriveItemVersion>(createDriveItemVersionFromDiscriminatorValue); },
        "video": n => { driveItem.video = n.getObjectValue<Video>(createVideoFromDiscriminatorValue); },
        "webDavUrl": n => { driveItem.webDavUrl = n.getStringValue(); },
        "workbook": n => { driveItem.workbook = n.getObjectValue<Workbook>(createWorkbookFromDiscriminatorValue); },
    }
}
