import {SetPresenceRequestBody} from './setPresenceRequestBody';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the setPresence method. */
export class SetPresenceRequestBodyImpl implements AdditionalDataHolder, Parsable, SetPresenceRequestBody {
    /** The activity property */
    activity?: string | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The availability property */
    availability?: string | undefined;
    /** The expirationDuration property */
    expirationDuration?: Duration | undefined;
    /** The sessionId property */
    sessionId?: string | undefined;
    /**
     * Instantiates a new setPresenceRequestBody and sets the default values.
     * @param setPresenceRequestBodyParameterValue 
     */
    public constructor(setPresenceRequestBodyParameterValue?: SetPresenceRequestBody | undefined) {
        this.additionalData = {};
        this.activity = setPresenceRequestBodyParameterValue?.activity ;
        this.additionalData = setPresenceRequestBodyParameterValue?.additionalData ? {} : setPresenceRequestBodyParameterValue?.additionalData!
        this.availability = setPresenceRequestBodyParameterValue?.availability ;
        this.expirationDuration = setPresenceRequestBodyParameterValue?.expirationDuration ;
        this.sessionId = setPresenceRequestBodyParameterValue?.sessionId ;
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
        if(this.activity)
        writer.writeStringValue("activity", this.activity);
        }
        if(this.availability){
        if(this.availability)
        writer.writeStringValue("availability", this.availability);
        }
        if(this.expirationDuration){
        if(this.expirationDuration)
        writer.writeDurationValue("expirationDuration", this.expirationDuration);
        }
        if(this.sessionId){
        if(this.sessionId)
        writer.writeStringValue("sessionId", this.sessionId);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
