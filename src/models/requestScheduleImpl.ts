import {createExpirationPatternFromDiscriminatorValue} from './createExpirationPatternFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {ExpirationPattern} from './expirationPattern';
import {ExpirationPatternImpl, PatternedRecurrenceImpl} from './index';
import {PatternedRecurrence} from './patternedRecurrence';
import {RequestSchedule} from './requestSchedule';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RequestScheduleImpl implements RequestSchedule {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** In entitlement management, when the access should expire. */
    private _expiration?: ExpirationPattern | undefined;
    /** For recurring access, or eligible or active assignment. This property is currently unsupported in both PIM and entitlement management. */
    private _recurrence?: PatternedRecurrence | undefined;
    /** The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. In PIM, when the  eligible or active assignment becomes active. */
    private _startDateTime?: Date | undefined;
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
     * Instantiates a new requestSchedule and sets the default values.
     * @param requestScheduleParameterValue 
     */
    public constructor(requestScheduleParameterValue?: RequestSchedule | undefined) {
        this._additionalData = requestScheduleParameterValue?.additionalData ? requestScheduleParameterValue?.additionalData! : {};
        this._expiration = requestScheduleParameterValue?.expiration;
        this._recurrence = requestScheduleParameterValue?.recurrence;
        this._startDateTime = requestScheduleParameterValue?.startDateTime;
    };
    /**
     * Gets the expiration property value. In entitlement management, when the access should expire.
     * @returns a ExpirationPatternInterface
     */
    public get expiration() {
        return this._expiration;
    };
    /**
     * Sets the expiration property value. In entitlement management, when the access should expire.
     * @param value Value to set for the expiration property.
     */
    public set expiration(value: ExpirationPattern | undefined) {
        if(value) {
            this._expiration = value instanceof ExpirationPatternImpl? value : new ExpirationPatternImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "expiration": n => { this.expiration = n.getObjectValue<ExpirationPatternImpl>(createExpirationPatternFromDiscriminatorValue); },
            "recurrence": n => { this.recurrence = n.getObjectValue<PatternedRecurrenceImpl>(createPatternedRecurrenceFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
        };
    };
    /**
     * Gets the recurrence property value. For recurring access, or eligible or active assignment. This property is currently unsupported in both PIM and entitlement management.
     * @returns a PatternedRecurrenceInterface
     */
    public get recurrence() {
        return this._recurrence;
    };
    /**
     * Sets the recurrence property value. For recurring access, or eligible or active assignment. This property is currently unsupported in both PIM and entitlement management.
     * @param value Value to set for the recurrence property.
     */
    public set recurrence(value: PatternedRecurrence | undefined) {
        if(value) {
            this._recurrence = value instanceof PatternedRecurrenceImpl? value : new PatternedRecurrenceImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.expiration){
            writer.writeObjectValue<ExpirationPatternImpl>("expiration", (!this.expiration || this.expiration instanceof ExpirationPatternImpl? this.expiration : new ExpirationPatternImpl(this.expiration)));
        }
        if(this.recurrence){
            writer.writeObjectValue<PatternedRecurrenceImpl>("recurrence", (!this.recurrence || this.recurrence instanceof PatternedRecurrenceImpl? this.recurrence : new PatternedRecurrenceImpl(this.recurrence)));
        }
        if(this.startDateTime){
            writer.writeDateValue("startDateTime", this.startDateTime);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the startDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. In PIM, when the  eligible or active assignment becomes active.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. In PIM, when the  eligible or active assignment becomes active.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        if(value) {
            this._startDateTime = value;
        }
    };
}
