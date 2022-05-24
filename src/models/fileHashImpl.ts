import {FileHash} from './fileHash';
import {FileHashType} from './fileHashType';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileHashImpl implements AdditionalDataHolder, FileHash, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** File hash type. Possible values are: unknown, sha1, sha256, md5, authenticodeHash256, lsHash, ctph, peSha1, peSha256. */
    public hashType?: FileHashType | undefined;
    /** Value of the file hash. */
    public hashValue?: string | undefined;
    /**
     * Instantiates a new fileHash and sets the default values.
     * @param fileHashParameterValue 
     */
    public constructor(fileHashParameterValue?: FileHash | undefined) {
        this.additionalData = fileHashParameterValue?.additionalData ? fileHashParameterValue?.additionalData! : {}
        this.hashType = fileHashParameterValue?.hashType ;
        this.hashValue = fileHashParameterValue?.hashValue ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "hashType": n => { this.hashType = n.getEnumValue<FileHashType>(FileHashType); },
            "hashValue": n => { this.hashValue = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.hashType){
        writer.writeEnumValue<FileHashType>("hashType", this.hashType);
        }
        if(this.hashValue){
        writer.writeStringValue("hashValue", this.hashValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
