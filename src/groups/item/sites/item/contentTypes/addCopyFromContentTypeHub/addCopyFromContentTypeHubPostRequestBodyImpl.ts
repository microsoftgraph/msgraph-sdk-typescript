import {AddCopyFromContentTypeHubPostRequestBody} from './addCopyFromContentTypeHubPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the addCopyFromContentTypeHub method. */
export class AddCopyFromContentTypeHubPostRequestBodyImpl implements AddCopyFromContentTypeHubPostRequestBody, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The contentTypeId property */
    public contentTypeId?: string | undefined;
    /**
     * Instantiates a new addCopyFromContentTypeHubPostRequestBody and sets the default values.
     * @param addCopyFromContentTypeHubPostRequestBodyParameterValue 
     */
    public constructor(addCopyFromContentTypeHubPostRequestBodyParameterValue?: AddCopyFromContentTypeHubPostRequestBody | undefined) {
        this.additionalData = addCopyFromContentTypeHubPostRequestBodyParameterValue?.additionalData ? addCopyFromContentTypeHubPostRequestBodyParameterValue?.additionalData! : {}
        this.contentTypeId = addCopyFromContentTypeHubPostRequestBodyParameterValue?.contentTypeId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "contentTypeId": n => { this.contentTypeId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.contentTypeId){
        writer.writeStringValue("contentTypeId", this.contentTypeId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
