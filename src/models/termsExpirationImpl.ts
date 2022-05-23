import {TermsExpiration} from './termsExpiration';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TermsExpirationImpl implements AdditionalDataHolder, Parsable, TermsExpiration {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Represents the frequency at which the terms will expire, after its first expiration as set in startDateTime. The value is represented in ISO 8601 format for durations. For example, PT1M represents a time period of 1 month. */
    public frequency?: Duration | undefined;
    /** The DateTime when the agreement is set to expire for all users. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    public startDateTime?: Date | undefined;
    /**
     * Instantiates a new termsExpiration and sets the default values.
     * @param termsExpirationParameterValue 
     */
    public constructor(termsExpirationParameterValue?: TermsExpiration | undefined) {
        this.additionalData = termsExpirationParameterValue?.additionalData ? termsExpirationParameterValue?.additionalData! : {}
        this.frequency = termsExpirationParameterValue?.frequency ;
        this.startDateTime = termsExpirationParameterValue?.startDateTime ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "frequency": n => { this.frequency = n.getDurationValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.frequency){
        writer.writeDurationValue("frequency", this.frequency);
        }
        if(this.startDateTime){
        writer.writeDateValue("startDateTime", this.startDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
