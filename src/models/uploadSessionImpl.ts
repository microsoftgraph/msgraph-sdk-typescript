import {UploadSession} from './uploadSession';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UploadSessionImpl implements AdditionalDataHolder, Parsable, UploadSession {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The date and time in UTC that the upload session will expire. The complete file must be uploaded before this expiration time is reached. */
    public expirationDateTime?: Date | undefined;
    /** When uploading files to document libraries, this is a collection of byte ranges that the server is missing for the file. These ranges are zero-indexed and of the format, '{start}-{end}' (e.g. '0-26' to indicate the first 27 bytes of the file). When uploading files as Outlook attachments, instead of a collection of ranges, this property always indicates a single value '{start}', the location in the file where the next upload should begin. */
    public nextExpectedRanges?: string[] | undefined;
    /** The URL endpoint that accepts PUT requests for byte ranges of the file. */
    public uploadUrl?: string | undefined;
    /**
     * Instantiates a new UploadSession and sets the default values.
     * @param uploadSessionParameterValue 
     */
    public constructor(uploadSessionParameterValue?: UploadSession | undefined) {
        this.additionalData = uploadSessionParameterValue?.additionalData ? uploadSessionParameterValue?.additionalData! : {}
        this.expirationDateTime = uploadSessionParameterValue?.expirationDateTime ;
        this.nextExpectedRanges = uploadSessionParameterValue?.nextExpectedRanges ;
        this.uploadUrl = uploadSessionParameterValue?.uploadUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "expirationDateTime": n => { this.expirationDateTime = n.getDateValue(); },
            "nextExpectedRanges": n => { this.nextExpectedRanges = n.getCollectionOfPrimitiveValues<string>(); },
            "uploadUrl": n => { this.uploadUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.expirationDateTime){
        writer.writeDateValue("expirationDateTime", this.expirationDateTime);
        }
        if(this.nextExpectedRanges){
        writer.writeCollectionOfPrimitiveValues<string>("nextExpectedRanges", this.nextExpectedRanges);
        }
        if(this.uploadUrl){
        writer.writeStringValue("uploadUrl", this.uploadUrl);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
