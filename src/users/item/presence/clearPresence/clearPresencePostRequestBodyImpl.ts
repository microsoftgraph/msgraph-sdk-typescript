import {ClearPresencePostRequestBody} from './clearPresencePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the clearPresence method. */
export class ClearPresencePostRequestBodyImpl implements AdditionalDataHolder, ClearPresencePostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The sessionId property */
    public sessionId?: string | undefined;
    /**
     * Instantiates a new clearPresencePostRequestBody and sets the default values.
     * @param clearPresencePostRequestBodyParameterValue 
     */
    public constructor(clearPresencePostRequestBodyParameterValue?: ClearPresencePostRequestBody | undefined) {
        this.additionalData = clearPresencePostRequestBodyParameterValue?.additionalData ? clearPresencePostRequestBodyParameterValue?.additionalData! : {}
        this.sessionId = clearPresencePostRequestBodyParameterValue?.sessionId ;
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
        writer.writeStringValue("sessionId", this.sessionId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
