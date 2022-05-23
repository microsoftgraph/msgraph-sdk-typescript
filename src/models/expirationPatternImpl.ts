import {ExpirationPattern} from './expirationPattern';
import {ExpirationPatternType} from './expirationPatternType';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExpirationPatternImpl implements AdditionalDataHolder, ExpirationPattern, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The requestor's desired duration of access represented in ISO 8601 format for durations. For example, PT3H refers to three hours.  If specified in a request, endDateTime should not be present and the type property should be set to afterDuration. */
    public duration?: Duration | undefined;
    /** Timestamp of date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    public endDateTime?: Date | undefined;
    /** The requestor's desired expiration pattern type. */
    public type?: ExpirationPatternType | undefined;
    /**
     * Instantiates a new expirationPattern and sets the default values.
     * @param expirationPatternParameterValue 
     */
    public constructor(expirationPatternParameterValue?: ExpirationPattern | undefined) {
        this.additionalData = expirationPatternParameterValue?.additionalData ? expirationPatternParameterValue?.additionalData! : {}
        this.duration = expirationPatternParameterValue?.duration ;
        this.endDateTime = expirationPatternParameterValue?.endDateTime ;
        this.type = expirationPatternParameterValue?.type ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "duration": n => { this.duration = n.getDurationValue(); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "type": n => { this.type = n.getEnumValue<ExpirationPatternType>(ExpirationPatternType); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.duration){
        writer.writeDurationValue("duration", this.duration);
        }
        if(this.endDateTime){
        writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.type){
        writer.writeEnumValue<ExpirationPatternType>("type", this.type);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
