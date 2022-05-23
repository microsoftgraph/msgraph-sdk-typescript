import {createFileSystemInfoFromDiscriminatorValue} from './createFileSystemInfoFromDiscriminatorValue';
import {DriveItemUploadableProperties} from './driveItemUploadableProperties';
import {FileSystemInfo} from './fileSystemInfo';
import {FileSystemInfoImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DriveItemUploadablePropertiesImpl implements AdditionalDataHolder, DriveItemUploadableProperties, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Provides a user-visible description of the item. Read-write. Only on OneDrive Personal. */
    public description?: string | undefined;
    /** Provides an expected file size to perform a quota check prior to upload. Only on OneDrive Personal. */
    public fileSize?: number | undefined;
    /** File system information on client. Read-write. */
    public fileSystemInfo?: FileSystemInfo | undefined;
    /** The name of the item (filename and extension). Read-write. */
    public name?: string | undefined;
    /**
     * Instantiates a new driveItemUploadableProperties and sets the default values.
     * @param driveItemUploadablePropertiesParameterValue 
     */
    public constructor(driveItemUploadablePropertiesParameterValue?: DriveItemUploadableProperties | undefined) {
        this.additionalData = driveItemUploadablePropertiesParameterValue?.additionalData ? driveItemUploadablePropertiesParameterValue?.additionalData! : {}
        this.description = driveItemUploadablePropertiesParameterValue?.description ;
        this.fileSize = driveItemUploadablePropertiesParameterValue?.fileSize ;
        this.fileSystemInfo = driveItemUploadablePropertiesParameterValue?.fileSystemInfo ;
        this.name = driveItemUploadablePropertiesParameterValue?.name ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "description": n => { this.description = n.getStringValue(); },
            "fileSize": n => { this.fileSize = n.getNumberValue(); },
            "fileSystemInfo": n => { this.fileSystemInfo = n.getObjectValue<FileSystemInfoImpl>(createFileSystemInfoFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.fileSize){
        writer.writeNumberValue("fileSize", this.fileSize);
        }
        if(this.fileSystemInfo){
        writer.writeObjectValue<FileSystemInfoImpl>("fileSystemInfo", new FileSystemInfoImpl(this.fileSystemInfo));
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
