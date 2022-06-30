import {FileSystemInfo} from './fileSystemInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileSystemInfoImpl implements FileSystemInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The UTC date and time the file was created on a client. */
    private _createdDateTime?: Date | undefined;
    /** The UTC date and time the file was last accessed. Available for the recent file list only. */
    private _lastAccessedDateTime?: Date | undefined;
    /** The UTC date and time the file was last modified on a client. */
    private _lastModifiedDateTime?: Date | undefined;
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
     * Instantiates a new fileSystemInfo and sets the default values.
     * @param fileSystemInfoParameterValue 
     */
    public constructor(fileSystemInfoParameterValue?: FileSystemInfo | undefined) {
        this._additionalData = fileSystemInfoParameterValue?.additionalData ? fileSystemInfoParameterValue?.additionalData! : {};
        this._createdDateTime = fileSystemInfoParameterValue?.createdDateTime;
        this._lastAccessedDateTime = fileSystemInfoParameterValue?.lastAccessedDateTime;
        this._lastModifiedDateTime = fileSystemInfoParameterValue?.lastModifiedDateTime;
    };
    /**
     * Gets the createdDateTime property value. The UTC date and time the file was created on a client.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. The UTC date and time the file was created on a client.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "lastAccessedDateTime": n => { this.lastAccessedDateTime = n.getDateValue(); },
            "lastModifiedDateTime": n => { this.lastModifiedDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the lastAccessedDateTime property value. The UTC date and time the file was last accessed. Available for the recent file list only.
     * @returns a Date
     */
    public get lastAccessedDateTime() {
        return this._lastAccessedDateTime;
    };
    /**
     * Sets the lastAccessedDateTime property value. The UTC date and time the file was last accessed. Available for the recent file list only.
     * @param value Value to set for the lastAccessedDateTime property.
     */
    public set lastAccessedDateTime(value: Date | undefined) {
        if(value) {
            this._lastAccessedDateTime = value;
        }
    };
    /**
     * Gets the lastModifiedDateTime property value. The UTC date and time the file was last modified on a client.
     * @returns a Date
     */
    public get lastModifiedDateTime() {
        return this._lastModifiedDateTime;
    };
    /**
     * Sets the lastModifiedDateTime property value. The UTC date and time the file was last modified on a client.
     * @param value Value to set for the lastModifiedDateTime property.
     */
    public set lastModifiedDateTime(value: Date | undefined) {
        if(value) {
            this._lastModifiedDateTime = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.lastAccessedDateTime){
            writer.writeDateValue("lastAccessedDateTime", this.lastAccessedDateTime);
        }
        if(this.lastModifiedDateTime){
            writer.writeDateValue("lastModifiedDateTime", this.lastModifiedDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
