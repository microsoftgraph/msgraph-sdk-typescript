import {createFileSystemInfoFromDiscriminatorValue} from './createFileSystemInfoFromDiscriminatorValue';
import {DriveItemUploadableProperties} from './driveItemUploadableProperties';
import {FileSystemInfo} from './fileSystemInfo';
import {FileSystemInfoImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DriveItemUploadablePropertiesImpl implements DriveItemUploadableProperties {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Provides a user-visible description of the item. Read-write. Only on OneDrive Personal. */
    private _description?: string | undefined;
    /** Provides an expected file size to perform a quota check prior to upload. Only on OneDrive Personal. */
    private _fileSize?: number | undefined;
    /** File system information on client. Read-write. */
    private _fileSystemInfo?: FileSystemInfo | undefined;
    /** The name of the item (filename and extension). Read-write. */
    private _name?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new driveItemUploadableProperties and sets the default values.
     * @param driveItemUploadablePropertiesParameterValue 
     */
    public constructor(driveItemUploadablePropertiesParameterValue?: DriveItemUploadableProperties | undefined) {
        this._additionalData = driveItemUploadablePropertiesParameterValue?.additionalData ? driveItemUploadablePropertiesParameterValue?.additionalData! : {};
        this._description = driveItemUploadablePropertiesParameterValue?.description;
        this._fileSize = driveItemUploadablePropertiesParameterValue?.fileSize;
        this._fileSystemInfo = driveItemUploadablePropertiesParameterValue?.fileSystemInfo;
        this._name = driveItemUploadablePropertiesParameterValue?.name;
    };
    /**
     * Gets the description property value. Provides a user-visible description of the item. Read-write. Only on OneDrive Personal.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Provides a user-visible description of the item. Read-write. Only on OneDrive Personal.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the fileSize property value. Provides an expected file size to perform a quota check prior to upload. Only on OneDrive Personal.
     * @returns a int64
     */
    public get fileSize() {
        return this._fileSize;
    };
    /**
     * Sets the fileSize property value. Provides an expected file size to perform a quota check prior to upload. Only on OneDrive Personal.
     * @param value Value to set for the fileSize property.
     */
    public set fileSize(value: number | undefined) {
        if(value) {
            this._fileSize = value;
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
            this._fileSystemInfo = value instanceof FileSystemInfoImpl? value : new FileSystemInfoImpl(value);
        }
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
     * Gets the name property value. The name of the item (filename and extension). Read-write.
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. The name of the item (filename and extension). Read-write.
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        if(value) {
            this._name = value;
        }
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
            writer.writeObjectValue<FileSystemInfoImpl>("fileSystemInfo", (!this.fileSystemInfo || this.fileSystemInfo instanceof FileSystemInfoImpl? this.fileSystemInfo : new FileSystemInfoImpl(this.fileSystemInfo)));
        }
        if(this.name){
            writer.writeStringValue("name", this.name);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
