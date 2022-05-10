import {ClearPresenceRequestBody} from './clearPresenceRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the clearPresence method.  */
export class ClearPresenceRequestBodyImpl implements AdditionalDataHolder, ClearPresenceRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The sessionId property  */
    sessionId?: string | undefined;
    /**
     * Instantiates a new clearPresenceRequestBody and sets the default values.
     * @param clearPresenceRequestBodyParameterValue 
     */
    public constructor(clearPresenceRequestBodyParameterValue?: ClearPresenceRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = clearPresenceRequestBodyParameterValue?.additionalData ? {} : clearPresenceRequestBodyParameterValue?.additionalData!
        this.sessionId = clearPresenceRequestBodyParameterValue?.sessionId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "sessionId": n => { this.sessionId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.sessionId){
        if(this.sessionId)
        writer.writeStringValue("sessionId", this.sessionId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
