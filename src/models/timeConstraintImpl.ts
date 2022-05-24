import {ActivityDomain} from './activityDomain';
import {createTimeSlotFromDiscriminatorValue} from './createTimeSlotFromDiscriminatorValue';
import {TimeSlotImpl} from './index';
import {TimeConstraint} from './timeConstraint';
import {TimeSlot} from './timeSlot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeConstraintImpl implements AdditionalDataHolder, Parsable, TimeConstraint {
    /** The nature of the activity, optional. Possible values are: work, personal, unrestricted, or unknown. */
    public activityDomain?: ActivityDomain | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The timeSlots property */
    public timeSlots?: TimeSlot[] | undefined;
    /**
     * Instantiates a new timeConstraint and sets the default values.
     * @param timeConstraintParameterValue 
     */
    public constructor(timeConstraintParameterValue?: TimeConstraint | undefined) {
        this.activityDomain = timeConstraintParameterValue?.activityDomain ;
        this.additionalData = timeConstraintParameterValue?.additionalData ? timeConstraintParameterValue?.additionalData! : {}
        this.timeSlots = timeConstraintParameterValue?.timeSlots ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "activityDomain": n => { this.activityDomain = n.getEnumValue<ActivityDomain>(ActivityDomain); },
            "timeSlots": n => { this.timeSlots = n.getCollectionOfObjectValues<TimeSlotImpl>(createTimeSlotFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.activityDomain){
        writer.writeEnumValue<ActivityDomain>("activityDomain", this.activityDomain);
        }
        if(this.timeSlots && this.timeSlots.length != 0){        const timeSlotsArrValue: TimeSlotImpl[] = []; this.timeSlots?.forEach(element => {timeSlotsArrValue.push(new TimeSlotImpl(element));});
        writer.writeCollectionOfObjectValues<TimeSlotImpl>("timeSlots", timeSlotsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
