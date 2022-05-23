import {createFileFromDiscriminatorValue} from './createFileFromDiscriminatorValue';
import {createFileSystemInfoFromDiscriminatorValue} from './createFileSystemInfoFromDiscriminatorValue';
import {createFolderFromDiscriminatorValue} from './createFolderFromDiscriminatorValue';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createImageFromDiscriminatorValue} from './createImageFromDiscriminatorValue';
import {createItemReferenceFromDiscriminatorValue} from './createItemReferenceFromDiscriminatorValue';
import {createPackageFromDiscriminatorValue} from './createPackageFromDiscriminatorValue';
import {createSharedFromDiscriminatorValue} from './createSharedFromDiscriminatorValue';
import {createSharepointIdsFromDiscriminatorValue} from './createSharepointIdsFromDiscriminatorValue';
import {createSpecialFolderFromDiscriminatorValue} from './createSpecialFolderFromDiscriminatorValue';
import {createVideoFromDiscriminatorValue} from './createVideoFromDiscriminatorValue';
import {File} from './file';
import {FileSystemInfo} from './fileSystemInfo';
import {Folder} from './folder';
import {IdentitySet} from './identitySet';
import {Image} from './image';
import {FileImpl, FileSystemInfoImpl, FolderImpl, IdentitySetImpl, ImageImpl, ItemReferenceImpl, PackageImpl, SharedImpl, SharepointIdsImpl, SpecialFolderImpl, VideoImpl} from './index';
import {ItemReference} from './itemReference';
import {Package} from './package';
import {RemoteItem} from './remoteItem';
import {Shared} from './shared';
import {SharepointIds} from './sharepointIds';
import {SpecialFolder} from './specialFolder';
import {Video} from './video';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RemoteItemImpl implements AdditionalDataHolder, Parsable, RemoteItem {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Identity of the user, device, and application which created the item. Read-only. */
    public createdBy?: IdentitySet | undefined;
    /** Date and time of item creation. Read-only. */
    public createdDateTime?: Date | undefined;
    /** Indicates that the remote item is a file. Read-only. */
    public file?: File | undefined;
    /** Information about the remote item from the local file system. Read-only. */
    public fileSystemInfo?: FileSystemInfo | undefined;
    /** Indicates that the remote item is a folder. Read-only. */
    public folder?: Folder | undefined;
    /** Unique identifier for the remote item in its drive. Read-only. */
    public id?: string | undefined;
    /** Image metadata, if the item is an image. Read-only. */
    public image?: Image | undefined;
    /** Identity of the user, device, and application which last modified the item. Read-only. */
    public lastModifiedBy?: IdentitySet | undefined;
    /** Date and time the item was last modified. Read-only. */
    public lastModifiedDateTime?: Date | undefined;
    /** Optional. Filename of the remote item. Read-only. */
    public name?: string | undefined;
    /** If present, indicates that this item is a package instead of a folder or file. Packages are treated like files in some contexts and folders in others. Read-only. */
    public package?: Package | undefined;
    /** Properties of the parent of the remote item. Read-only. */
    public parentReference?: ItemReference | undefined;
    /** Indicates that the item has been shared with others and provides information about the shared state of the item. Read-only. */
    public shared?: Shared | undefined;
    /** Provides interop between items in OneDrive for Business and SharePoint with the full set of item identifiers. Read-only. */
    public sharepointIds?: SharepointIds | undefined;
    /** Size of the remote item. Read-only. */
    public size?: number | undefined;
    /** If the current item is also available as a special folder, this facet is returned. Read-only. */
    public specialFolder?: SpecialFolder | undefined;
    /** Video metadata, if the item is a video. Read-only. */
    public video?: Video | undefined;
    /** DAV compatible URL for the item. */
    public webDavUrl?: string | undefined;
    /** URL that displays the resource in the browser. Read-only. */
    public webUrl?: string | undefined;
    /**
     * Instantiates a new remoteItem and sets the default values.
     * @param remoteItemParameterValue 
     */
    public constructor(remoteItemParameterValue?: RemoteItem | undefined) {
        this.additionalData = remoteItemParameterValue?.additionalData ? remoteItemParameterValue?.additionalData! : {}
        this.createdBy = remoteItemParameterValue?.createdBy ;
        this.createdDateTime = remoteItemParameterValue?.createdDateTime ;
        this.file = remoteItemParameterValue?.file ;
        this.fileSystemInfo = remoteItemParameterValue?.fileSystemInfo ;
        this.folder = remoteItemParameterValue?.folder ;
        this.id = remoteItemParameterValue?.id ;
        this.image = remoteItemParameterValue?.image ;
        this.lastModifiedBy = remoteItemParameterValue?.lastModifiedBy ;
        this.lastModifiedDateTime = remoteItemParameterValue?.lastModifiedDateTime ;
        this.name = remoteItemParameterValue?.name ;
        this.package = remoteItemParameterValue?.package ;
        this.parentReference = remoteItemParameterValue?.parentReference ;
        this.shared = remoteItemParameterValue?.shared ;
        this.sharepointIds = remoteItemParameterValue?.sharepointIds ;
        this.size = remoteItemParameterValue?.size ;
        this.specialFolder = remoteItemParameterValue?.specialFolder ;
        this.video = remoteItemParameterValue?.video ;
        this.webDavUrl = remoteItemParameterValue?.webDavUrl ;
        this.webUrl = remoteItemParameterValue?.webUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "createdBy": n => { this.createdBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "file": n => { this.file = n.getObjectValue<FileImpl>(createFileFromDiscriminatorValue); },
            "fileSystemInfo": n => { this.fileSystemInfo = n.getObjectValue<FileSystemInfoImpl>(createFileSystemInfoFromDiscriminatorValue); },
            "folder": n => { this.folder = n.getObjectValue<FolderImpl>(createFolderFromDiscriminatorValue); },
            "id": n => { this.id = n.getStringValue(); },
            "image": n => { this.image = n.getObjectValue<ImageImpl>(createImageFromDiscriminatorValue); },
            "lastModifiedBy": n => { this.lastModifiedBy = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
            "name": n => { this.name = n.getStringValue(); },
            "package": n => { this.package = n.getObjectValue<PackageImpl>(createPackageFromDiscriminatorValue); },
            "parentReference": n => { this.parentReference = n.getObjectValue<ItemReferenceImpl>(createItemReferenceFromDiscriminatorValue); },
            "shared": n => { this.shared = n.getObjectValue<SharedImpl>(createSharedFromDiscriminatorValue); },
            "sharepointIds": n => { this.sharepointIds = n.getObjectValue<SharepointIdsImpl>(createSharepointIdsFromDiscriminatorValue); },
            "size": n => { this.size = n.getNumberValue(); },
            "specialFolder": n => { this.specialFolder = n.getObjectValue<SpecialFolderImpl>(createSpecialFolderFromDiscriminatorValue); },
            "video": n => { this.video = n.getObjectValue<VideoImpl>(createVideoFromDiscriminatorValue); },
            "webDavUrl": n => { this.webDavUrl = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.createdBy){
        writer.writeObjectValue<IdentitySetImpl>("createdBy", new IdentitySetImpl(this.createdBy));
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
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
        if(this.id){
        writer.writeStringValue("id", this.id);
        }
        if(this.image){
        writer.writeObjectValue<ImageImpl>("image", new ImageImpl(this.image));
        }
        if(this.lastModifiedBy){
        writer.writeObjectValue<IdentitySetImpl>("lastModifiedBy", new IdentitySetImpl(this.lastModifiedBy));
        }
        if(this.lastModifiedDateTime){
        writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.package){
        writer.writeObjectValue<PackageImpl>("package", new PackageImpl(this.package));
        }
        if(this.parentReference){
        writer.writeObjectValue<ItemReferenceImpl>("parentReference", new ItemReferenceImpl(this.parentReference));
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
        if(this.video){
        writer.writeObjectValue<VideoImpl>("video", new VideoImpl(this.video));
        }
        if(this.webDavUrl){
        writer.writeStringValue("webDavUrl", this.webDavUrl);
        }
        if(this.webUrl){
        writer.writeStringValue("webUrl", this.webUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
