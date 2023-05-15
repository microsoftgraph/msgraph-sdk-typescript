import {createFileFromDiscriminatorValue} from './createFileFromDiscriminatorValue';
import {createFileSystemInfoFromDiscriminatorValue} from './createFileSystemInfoFromDiscriminatorValue';
import {createFolderFromDiscriminatorValue} from './createFolderFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createImageFromDiscriminatorValue} from './createImageFromDiscriminatorValue';
import {createItemReferenceFromDiscriminatorValue} from './createItemReferenceFromDiscriminatorValue';
import {createPackageEscapedFromDiscriminatorValue} from './createPackageEscapedFromDiscriminatorValue';
import {createSharedFromDiscriminatorValue} from './createSharedFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {createSpecialFolderFromDiscriminatorValue} from './createSpecialFolderFromDiscriminatorValue';
import {createVideoFromDiscriminatorValue} from './createVideoFromDiscriminatorValue';
import {File} from './file';
import {FileSystemInfo} from './fileSystemInfo';
import {Folder} from './folder';
import {IdentitySet} from './identitySet';
import {Image} from './image';
import {ItemReference} from './itemReference';
import {PackageEscaped} from './packageEscaped';
import {RemoteItem} from './remoteItem';
import {serializeFile} from './serializeFile';
import {serializeFileSystemInfo} from './serializeFileSystemInfo';
import {serializeFolder} from './serializeFolder';
import {serializeIdentitySet} from './serializeIdentitySet';
import {serializeImage} from './serializeImage';
import {serializeItemReference} from './serializeItemReference';
import {serializePackageEscaped} from './serializePackageEscaped';
import {serializeShared} from './serializeShared';
import {serializeSharepointIds} from './serializeSharepointIds';
import {serializeSpecialFolder} from './serializeSpecialFolder';
import {serializeVideo} from './serializeVideo';
import {Shared} from './shared';
import {SharepointIds} from './sharepointIds';
import {SpecialFolder} from './specialFolder';
import {Video} from './video';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemoteItem(remoteItem: RemoteItem | undefined = {} as RemoteItem) : Record<string, (node: ParseNode) => void> {
    return {
        "createdBy": n => { remoteItem.createdBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "createdDateTime": n => { remoteItem.createdDateTime = n.getDateValue(); },
        "file": n => { remoteItem.file = n.getObjectValue<File>(createFileFromDiscriminatorValue); },
        "fileSystemInfo": n => { remoteItem.fileSystemInfo = n.getObjectValue<FileSystemInfo>(createFileSystemInfoFromDiscriminatorValue); },
        "folder": n => { remoteItem.folder = n.getObjectValue<Folder>(createFolderFromDiscriminatorValue); },
        "id": n => { remoteItem.id = n.getStringValue(); },
        "image": n => { remoteItem.image = n.getObjectValue<Image>(createImageFromDiscriminatorValue); },
        "lastModifiedBy": n => { remoteItem.lastModifiedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { remoteItem.lastModifiedDateTime = n.getDateValue(); },
        "name": n => { remoteItem.name = n.getStringValue(); },
        "@odata.type": n => { remoteItem.odataType = n.getStringValue(); },
        "package": n => { remoteItem.packageEscaped = n.getObjectValue<PackageEscaped>(createPackageEscapedFromDiscriminatorValue); },
        "parentReference": n => { remoteItem.parentReference = n.getObjectValue<ItemReference>(createItemReferenceFromDiscriminatorValue); },
        "shared": n => { remoteItem.shared = n.getObjectValue<Shared>(createSharedFromDiscriminatorValue); },
        "sharepointIds": n => { remoteItem.sharepointIds = n.getObjectValue<SharepointIds>(createSharepointIdsFromDiscriminatorValue); },
        "size": n => { remoteItem.size = n.getNumberValue(); },
        "specialFolder": n => { remoteItem.specialFolder = n.getObjectValue<SpecialFolder>(createSpecialFolderFromDiscriminatorValue); },
        "video": n => { remoteItem.video = n.getObjectValue<Video>(createVideoFromDiscriminatorValue); },
        "webDavUrl": n => { remoteItem.webDavUrl = n.getStringValue(); },
        "webUrl": n => { remoteItem.webUrl = n.getStringValue(); },
    }
}
