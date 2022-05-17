import {AcceptRequestBody} from './acceptRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the accept method. */
export class AcceptRequestBodyImpl implements AcceptRequestBody, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The Comment property */
    comment?: string | undefined;
    /** The SendResponse property */
    sendResponse?: boolean | undefined;
    /**
     * Instantiates a new acceptRequestBody and sets the default values.
     * @param acceptRequestBodyParameterValue 
     */
    public constructor(acceptRequestBodyParameterValue?: AcceptRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = acceptRequestBodyParameterValue?.additionalData ? {} : acceptRequestBodyParameterValue?.additionalData!
        this.comment = acceptRequestBodyParameterValue?.comment ;
        this.sendResponse = acceptRequestBodyParameterValue?.sendResponse ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "comment": n => { this.comment = n.getStringValue(); },
            "sendResponse": n => { this.sendResponse = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.comment){
        if(this.comment)
        writer.writeStringValue("comment", this.comment);
        }
        if(this.sendResponse){
        if(this.sendResponse)
        writer.writeBooleanValue("sendResponse", this.sendResponse);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
