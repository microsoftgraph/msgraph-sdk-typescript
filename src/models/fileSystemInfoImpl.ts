import {FileSystemInfo} from './fileSystemInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileSystemInfoImpl implements AdditionalDataHolder, FileSystemInfo, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The UTC date and time the file was created on a client. */
    public createdDateTime?: Date | undefined;
    /** The UTC date and time the file was last accessed. Available for the recent file list only. */
    public lastAccessedDateTime?: Date | undefined;
    /** The UTC date and time the file was last modified on a client. */
    public lastModifiedDateTime?: Date | undefined;
    /**
     * Instantiates a new fileSystemInfo and sets the default values.
     * @param fileSystemInfoParameterValue 
     */
    public constructor(fileSystemInfoParameterValue?: FileSystemInfo | undefined) {
        this.additionalData = fileSystemInfoParameterValue?.additionalData ? fileSystemInfoParameterValue?.additionalData! : {}
        this.createdDateTime = fileSystemInfoParameterValue?.createdDateTime ;
        this.lastAccessedDateTime = fileSystemInfoParameterValue?.lastAccessedDateTime ;
        this.lastModifiedDateTime = fileSystemInfoParameterValue?.lastModifiedDateTime ;
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
