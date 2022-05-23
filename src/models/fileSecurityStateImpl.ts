import {createFileHashFromDiscriminatorValue} from './createFileHashFromDiscriminatorValue';
import {FileHash} from './fileHash';
import {FileSecurityState} from './fileSecurityState';
import {FileHashImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileSecurityStateImpl implements AdditionalDataHolder, FileSecurityState, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Complex type containing file hashes (cryptographic and location-sensitive). */
    public fileHash?: FileHash | undefined;
    /** File name (without path). */
    public name?: string | undefined;
    /** Full file path of the file/imageFile. */
    public path?: string | undefined;
    /** Provider generated/calculated risk score of the alert file. Recommended value range of 0-1, which equates to a percentage. */
    public riskScore?: string | undefined;
    /**
     * Instantiates a new fileSecurityState and sets the default values.
     * @param fileSecurityStateParameterValue 
     */
    public constructor(fileSecurityStateParameterValue?: FileSecurityState | undefined) {
        this.additionalData = fileSecurityStateParameterValue?.additionalData ? fileSecurityStateParameterValue?.additionalData! : {}
        this.fileHash = fileSecurityStateParameterValue?.fileHash ;
        this.name = fileSecurityStateParameterValue?.name ;
        this.path = fileSecurityStateParameterValue?.path ;
        this.riskScore = fileSecurityStateParameterValue?.riskScore ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "fileHash": n => { this.fileHash = n.getObjectValue<FileHashImpl>(createFileHashFromDiscriminatorValue); },
            "name": n => { this.name = n.getStringValue(); },
            "path": n => { this.path = n.getStringValue(); },
            "riskScore": n => { this.riskScore = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.fileHash){
        writer.writeObjectValue<FileHashImpl>("fileHash", new FileHashImpl(this.fileHash));
        }
        if(this.name){
        writer.writeStringValue("name", this.name);
        }
        if(this.path){
        writer.writeStringValue("path", this.path);
        }
        if(this.riskScore){
        writer.writeStringValue("riskScore", this.riskScore);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
