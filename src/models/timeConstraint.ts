import {ActivityDomain} from './activityDomain';
import {FindMeetingTimesMember1, TimeSlot} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TimeConstraint implements AdditionalDataHolder, Parsable {
    /** The nature of the activity, optional. Possible values are: work, personal, unrestricted, or unknown. */
    private _activityDomain?: ActivityDomain | FindMeetingTimesMember1 | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The timeSlots property */
    private _timeSlots?: TimeSlot | FindMeetingTimesMember1[] | undefined;
    /**
     * Gets the activityDomain property value. The nature of the activity, optional. Possible values are: work, personal, unrestricted, or unknown.
     * @returns a findMeetingTimes
     */
    public get activityDomain() {
        return this._activityDomain;
    };
    /**
     * Sets the activityDomain property value. The nature of the activity, optional. Possible values are: work, personal, unrestricted, or unknown.
     * @param value Value to set for the activityDomain property.
     */
    public set activityDomain(value: ActivityDomain | FindMeetingTimesMember1 | undefined) {
        this._activityDomain = value;
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
        this._additionalData = value;
    };
    /**
     * Instantiates a new timeConstraint and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "activityDomain": n => { this.activityDomain = n.getObjectValue<ActivityDomain>(createActivityDomainFromDiscriminatorValue); },
            "timeSlots": n => { this.timeSlots = n.getObjectValue<TimeSlot>(createTimeSlotFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<ActivityDomain>("activityDomain", this.activityDomain);
        writer.writeObjectValue<TimeSlot>("timeSlots", this.timeSlots);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the timeSlots property value. The timeSlots property
     * @returns a findMeetingTimes
     */
    public get timeSlots() {
        return this._timeSlots;
    };
    /**
     * Sets the timeSlots property value. The timeSlots property
     * @param value Value to set for the timeSlots property.
     */
    public set timeSlots(value: TimeSlot | FindMeetingTimesMember1[] | undefined) {
        this._timeSlots = value;
    };
}
