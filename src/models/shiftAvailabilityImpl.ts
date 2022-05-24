import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {createTimeRangeFromDiscriminatorValue} from './createTimeRangeFromDiscriminatorValue';
import {PatternedRecurrenceImpl, TimeRangeImpl} from './index';
import {PatternedRecurrence} from './patternedRecurrence';
import {ShiftAvailability} from './shiftAvailability';
import {TimeRange} from './timeRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ShiftAvailabilityImpl implements AdditionalDataHolder, Parsable, ShiftAvailability {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Specifies the pattern for recurrence */
    public recurrence?: PatternedRecurrence | undefined;
    /** The time slot(s) preferred by the user. */
    public timeSlots?: TimeRange[] | undefined;
    /** Specifies the time zone for the indicated time. */
    public timeZone?: string | undefined;
    /**
     * Instantiates a new shiftAvailability and sets the default values.
     * @param shiftAvailabilityParameterValue 
     */
    public constructor(shiftAvailabilityParameterValue?: ShiftAvailability | undefined) {
        this.additionalData = shiftAvailabilityParameterValue?.additionalData ? shiftAvailabilityParameterValue?.additionalData! : {}
        this.recurrence = shiftAvailabilityParameterValue?.recurrence ;
        this.timeSlots = shiftAvailabilityParameterValue?.timeSlots ;
        this.timeZone = shiftAvailabilityParameterValue?.timeZone ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.recurrence){
        writer.writeObjectValue<PatternedRecurrenceImpl>("recurrence", new PatternedRecurrenceImpl(this.recurrence));
        }
        if(this.timeSlots && this.timeSlots.length != 0){        const timeSlotsArrValue: TimeRangeImpl[] = []; this.timeSlots?.forEach(element => {timeSlotsArrValue.push(new TimeRangeImpl(element));});
        writer.writeCollectionOfObjectValues<TimeRangeImpl>("timeSlots", timeSlotsArrValue);
        }
        if(this.timeZone){
        writer.writeStringValue("timeZone", this.timeZone);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
