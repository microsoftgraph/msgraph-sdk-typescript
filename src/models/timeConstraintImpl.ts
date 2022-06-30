import {ActivityDomain} from './activityDomain';
import {createTimeSlotFromDiscriminatorValue} from './createTimeSlotFromDiscriminatorValue';
import {TimeSlotImpl} from './index';
import {TimeConstraint} from './timeConstraint';
import {TimeSlot} from './timeSlot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeConstraintImpl implements TimeConstraint {
    /** The nature of the activity, optional. Possible values are: work, personal, unrestricted, or unknown. */
    private _activityDomain?: ActivityDomain | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The timeSlots property */
    private _timeSlots?: TimeSlot[] | undefined;
    /**
     * Gets the activityDomain property value. The nature of the activity, optional. Possible values are: work, personal, unrestricted, or unknown.
     * @returns a activityDomain
     */
    public get activityDomain() {
        return this._activityDomain;
    };
    /**
     * Sets the activityDomain property value. The nature of the activity, optional. Possible values are: work, personal, unrestricted, or unknown.
     * @param value Value to set for the activityDomain property.
     */
    public set activityDomain(value: ActivityDomain | undefined) {
        if(value) {
            this._activityDomain = value;
        }
    };
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
     * Instantiates a new timeConstraint and sets the default values.
     * @param timeConstraintParameterValue 
     */
    public constructor(timeConstraintParameterValue?: TimeConstraint | undefined) {
        this._activityDomain = timeConstraintParameterValue?.activityDomain;
        this._additionalData = timeConstraintParameterValue?.additionalData ? timeConstraintParameterValue?.additionalData! : {};
        this._timeSlots = timeConstraintParameterValue?.timeSlots;
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
        if(this.timeSlots && this.timeSlots.length != 0){        const timeSlotsArrValue: TimeSlotImpl[] = [];
        this.timeSlots?.forEach(element => {
            timeSlotsArrValue.push((element instanceof TimeSlotImpl? element:new TimeSlotImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TimeSlotImpl>("timeSlots", timeSlotsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the timeSlots property value. The timeSlots property
     * @returns a TimeSlotInterface
     */
    public get timeSlots() {
        return this._timeSlots;
    };
    /**
     * Sets the timeSlots property value. The timeSlots property
     * @param value Value to set for the timeSlots property.
     */
    public set timeSlots(value: TimeSlot[] | undefined) {
        if(value) {
            const timeSlotsArrValue: TimeSlotImpl[] = [];
            this.timeSlots?.forEach(element => {
                timeSlotsArrValue.push((element instanceof TimeSlotImpl? element:new TimeSlotImpl(element)));
            });
            this._timeSlots = timeSlotsArrValue;
        }
    };
}
