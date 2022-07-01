import {ExpirationPattern} from './expirationPattern';
import {ExpirationPatternType} from './expirationPatternType';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ExpirationPatternImpl implements ExpirationPattern {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** The requestor's desired duration of access represented in ISO 8601 format for durations. For example, PT3H refers to three hours.  If specified in a request, endDateTime should not be present and the type property should be set to afterDuration. */
    private _duration?: Duration | undefined;
    /** Timestamp of date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. */
    private _endDateTime?: Date | undefined;
    /** The requestor's desired expiration pattern type. */
    private _type?: ExpirationPatternType | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new expirationPattern and sets the default values.
     * @param expirationPatternParameterValue 
     */
    public constructor(expirationPatternParameterValue?: ExpirationPattern | undefined) {
        this._additionalData = expirationPatternParameterValue?.additionalData ? expirationPatternParameterValue?.additionalData! : {};
        this._duration = expirationPatternParameterValue?.duration;
        this._endDateTime = expirationPatternParameterValue?.endDateTime;
        this._type = expirationPatternParameterValue?.type;
    };
    /**
     * Gets the duration property value. The requestor's desired duration of access represented in ISO 8601 format for durations. For example, PT3H refers to three hours.  If specified in a request, endDateTime should not be present and the type property should be set to afterDuration.
     * @returns a Duration
     */
    public get duration() {
        return this._duration;
    };
    /**
     * Sets the duration property value. The requestor's desired duration of access represented in ISO 8601 format for durations. For example, PT3H refers to three hours.  If specified in a request, endDateTime should not be present and the type property should be set to afterDuration.
     * @param value Value to set for the duration property.
     */
    public set duration(value: Duration | undefined) {
        if(value) {
            this._duration = value;
        }
    };
    /**
     * Gets the endDateTime property value. Timestamp of date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. Timestamp of date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        if(value) {
            this._endDateTime = value;
        }
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
    /**
     * Gets the type property value. The requestor's desired expiration pattern type.
     * @returns a expirationPatternType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The requestor's desired expiration pattern type.
     * @param value Value to set for the type property.
     */
    public set type(value: ExpirationPatternType | undefined) {
        if(value) {
            this._type = value;
        }
    };
}
