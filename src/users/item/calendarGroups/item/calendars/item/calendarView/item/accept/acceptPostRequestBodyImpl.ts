import {AcceptPostRequestBody} from './acceptPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the accept method. */
export class AcceptPostRequestBodyImpl implements AcceptPostRequestBody, AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The Comment property */
    public comment?: string | undefined;
    /** The SendResponse property */
    public sendResponse?: boolean | undefined;
    /**
     * Instantiates a new acceptPostRequestBody and sets the default values.
     * @param acceptPostRequestBodyParameterValue 
     */
    public constructor(acceptPostRequestBodyParameterValue?: AcceptPostRequestBody | undefined) {
        this.additionalData = acceptPostRequestBodyParameterValue?.additionalData ? acceptPostRequestBodyParameterValue?.additionalData! : {}
        this.comment = acceptPostRequestBodyParameterValue?.comment ;
        this.sendResponse = acceptPostRequestBodyParameterValue?.sendResponse ;
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
        writer.writeStringValue("comment", this.comment);
        }
        if(this.sendResponse){
        writer.writeBooleanValue("sendResponse", this.sendResponse);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
