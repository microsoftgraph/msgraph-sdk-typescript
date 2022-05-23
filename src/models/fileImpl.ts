import {createHashesFromDiscriminatorValue} from './createHashesFromDiscriminatorValue';
import {File} from './file';
import {Hashes} from './hashes';
import {HashesImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class FileImpl implements AdditionalDataHolder, File, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Hashes of the file's binary content, if available. Read-only. */
    public hashes?: Hashes | undefined;
    /** The MIME type for the file. This is determined by logic on the server and might not be the value provided when the file was uploaded. Read-only. */
    public mimeType?: string | undefined;
    /** The processingMetadata property */
    public processingMetadata?: boolean | undefined;
    /**
     * Instantiates a new file and sets the default values.
     * @param fileParameterValue 
     */
    public constructor(fileParameterValue?: File | undefined) {
        this.additionalData = fileParameterValue?.additionalData ? fileParameterValue?.additionalData! : {}
        this.hashes = fileParameterValue?.hashes ;
        this.mimeType = fileParameterValue?.mimeType ;
        this.processingMetadata = fileParameterValue?.processingMetadata ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "hashes": n => { this.hashes = n.getObjectValue<HashesImpl>(createHashesFromDiscriminatorValue); },
            "mimeType": n => { this.mimeType = n.getStringValue(); },
            "processingMetadata": n => { this.processingMetadata = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.hashes){
        writer.writeObjectValue<HashesImpl>("hashes", new HashesImpl(this.hashes));
        }
        if(this.mimeType){
        writer.writeStringValue("mimeType", this.mimeType);
        }
        if(this.processingMetadata){
        writer.writeBooleanValue("processingMetadata", this.processingMetadata);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
