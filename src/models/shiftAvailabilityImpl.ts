import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {createTimeRangeFromDiscriminatorValue} from './createTimeRangeFromDiscriminatorValue';
import {PatternedRecurrenceImpl, TimeRangeImpl} from './index';
import {PatternedRecurrence} from './patternedRecurrence';
import {ShiftAvailability} from './shiftAvailability';
import {TimeRange} from './timeRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ShiftAvailabilityImpl implements ShiftAvailability {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Specifies the pattern for recurrence */
    private _recurrence?: PatternedRecurrence | undefined;
    /** The time slot(s) preferred by the user. */
    private _timeSlots?: TimeRange[] | undefined;
    /** Specifies the time zone for the indicated time. */
    private _timeZone?: string | undefined;
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
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new shiftAvailability and sets the default values.
     * @param shiftAvailabilityParameterValue 
     */
    public constructor(shiftAvailabilityParameterValue?: ShiftAvailability | undefined) {
        this._additionalData = shiftAvailabilityParameterValue?.additionalData ? shiftAvailabilityParameterValue?.additionalData! : {};
        this._recurrence = shiftAvailabilityParameterValue?.recurrence;
        this._timeSlots = shiftAvailabilityParameterValue?.timeSlots;
        this._timeZone = shiftAvailabilityParameterValue?.timeZone;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "recurrence": n => { this.recurrence = n.getObjectValue<PatternedRecurrenceImpl>(createPatternedRecurrenceFromDiscriminatorValue); },
            "timeSlots": n => { this.timeSlots = n.getCollectionOfObjectValues<TimeRangeImpl>(createTimeRangeFromDiscriminatorValue); },
            "timeZone": n => { this.timeZone = n.getStringValue(); },
        };
    };
    /**
     * Gets the recurrence property value. Specifies the pattern for recurrence
     * @returns a PatternedRecurrenceInterface
     */
    public get recurrence() {
        return this._recurrence;
    };
    /**
     * Sets the recurrence property value. Specifies the pattern for recurrence
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
        if(this.recurrence){
            writer.writeObjectValue<PatternedRecurrenceImpl>("recurrence", (!this.recurrence || this.recurrence instanceof PatternedRecurrenceImpl? this.recurrence : new PatternedRecurrenceImpl(this.recurrence)));
        }
        if(this.timeSlots && this.timeSlots.length != 0){        const timeSlotsArrValue: TimeRangeImpl[] = [];
        this.timeSlots?.forEach(element => {
            timeSlotsArrValue.push((element instanceof TimeRangeImpl? element:new TimeRangeImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TimeRangeImpl>("timeSlots", timeSlotsArrValue);
        }
        if(this.timeZone){
            writer.writeStringValue("timeZone", this.timeZone);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the timeSlots property value. The time slot(s) preferred by the user.
     * @returns a TimeRangeInterface
     */
    public get timeSlots() {
        return this._timeSlots;
    };
    /**
     * Sets the timeSlots property value. The time slot(s) preferred by the user.
     * @param value Value to set for the timeSlots property.
     */
    public set timeSlots(value: TimeRange[] | undefined) {
        if(value) {
            const timeSlotsArrValue: TimeRangeImpl[] = [];
            this.timeSlots?.forEach(element => {
                timeSlotsArrValue.push((element instanceof TimeRangeImpl? element:new TimeRangeImpl(element)));
            });
            this._timeSlots = timeSlotsArrValue;
        }
    };
    /**
     * Gets the timeZone property value. Specifies the time zone for the indicated time.
     * @returns a string
     */
    public get timeZone() {
        return this._timeZone;
    };
    /**
     * Sets the timeZone property value. Specifies the time zone for the indicated time.
     * @param value Value to set for the timeZone property.
     */
    public set timeZone(value: string | undefined) {
        if(value) {
            this._timeZone = value;
        }
    };
}
