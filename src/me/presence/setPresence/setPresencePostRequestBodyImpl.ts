import {SetPresencePostRequestBody} from './setPresencePostRequestBody';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the setPresence method. */
export class SetPresencePostRequestBodyImpl implements AdditionalDataHolder, Parsable, SetPresencePostRequestBody {
    /** The activity property */
    public activity?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The availability property */
    public availability?: string | undefined;
    /** The expirationDuration property */
    public expirationDuration?: Duration | undefined;
    /** The sessionId property */
    public sessionId?: string | undefined;
    /**
     * Instantiates a new setPresencePostRequestBody and sets the default values.
     * @param setPresencePostRequestBodyParameterValue 
     */
    public constructor(setPresencePostRequestBodyParameterValue?: SetPresencePostRequestBody | undefined) {
        this.activity = setPresencePostRequestBodyParameterValue?.activity ;
        this.additionalData = setPresencePostRequestBodyParameterValue?.additionalData ? setPresencePostRequestBodyParameterValue?.additionalData! : {}
        this.availability = setPresencePostRequestBodyParameterValue?.availability ;
        this.expirationDuration = setPresencePostRequestBodyParameterValue?.expirationDuration ;
        this.sessionId = setPresencePostRequestBodyParameterValue?.sessionId ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "activity": n => { this.activity = n.getStringValue(); },
            "availability": n => { this.availability = n.getStringValue(); },
            "expirationDuration": n => { this.expirationDuration = n.getDurationValue(); },
            "sessionId": n => { this.sessionId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.activity){
        writer.writeStringValue("activity", this.activity);
        }
        if(this.availability){
        writer.writeStringValue("availability", this.availability);
        }
        if(this.expirationDuration){
        writer.writeDurationValue("expirationDuration", this.expirationDuration);
        }
        if(this.sessionId){
        writer.writeStringValue("sessionId", this.sessionId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
