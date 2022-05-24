import {AddCopyPostRequestBody} from './addCopyPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the addCopy method. */
export class AddCopyPostRequestBodyImpl implements AddCopyPostRequestBody, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The contentType property */
    public contentType?: string | undefined;
    /**
     * Instantiates a new addCopyPostRequestBody and sets the default values.
     * @param addCopyPostRequestBodyParameterValue 
     */
    public constructor(addCopyPostRequestBodyParameterValue?: AddCopyPostRequestBody | undefined) {
        this.additionalData = addCopyPostRequestBodyParameterValue?.additionalData ? addCopyPostRequestBodyParameterValue?.additionalData! : {}
        this.contentType = addCopyPostRequestBodyParameterValue?.contentType ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "contentType": n => { this.contentType = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.contentType){
        writer.writeStringValue("contentType", this.contentType);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
