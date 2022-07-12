import {AdminMember1, DateTimeTimeZone, Event, Location, Message, PatternedRecurrence} from './index';
import {MeetingMessageType} from './meetingMessageType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EventMessage extends Message implements Parsable {
    /** The end time of the requested meeting. */
    private _endDateTime?: DateTimeTimeZone | AdminMember1 | undefined;
    /** The event associated with the event message. The assumption for attendees or room resources is that the Calendar Attendant is set to automatically update the calendar with an event when meeting request event messages arrive. Navigation property.  Read-only. */
    private _event?: Event | AdminMember1 | undefined;
    /** The isAllDay property */
    private _isAllDay?: boolean | undefined;
    /** The isDelegated property */
    private _isDelegated?: boolean | undefined;
    /** The isOutOfDate property */
    private _isOutOfDate?: boolean | undefined;
    /** The location property */
    private _location?: Location | AdminMember1 | undefined;
    /** The meetingMessageType property */
    private _meetingMessageType?: MeetingMessageType | AdminMember1 | undefined;
    /** The recurrence property */
    private _recurrence?: PatternedRecurrence | AdminMember1 | undefined;
    /** The startDateTime property */
    private _startDateTime?: DateTimeTimeZone | AdminMember1 | undefined;
    /**
     * Instantiates a new EventMessage and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the endDateTime property value. The end time of the requested meeting.
     * @returns a admin
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. The end time of the requested meeting.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: DateTimeTimeZone | AdminMember1 | undefined) {
        this._endDateTime = value;
    };
    /**
     * Gets the event property value. The event associated with the event message. The assumption for attendees or room resources is that the Calendar Attendant is set to automatically update the calendar with an event when meeting request event messages arrive. Navigation property.  Read-only.
     * @returns a admin
     */
    public get event() {
        return this._event;
    };
    /**
     * Sets the event property value. The event associated with the event message. The assumption for attendees or room resources is that the Calendar Attendant is set to automatically update the calendar with an event when meeting request event messages arrive. Navigation property.  Read-only.
     * @param value Value to set for the event property.
     */
    public set event(value: Event | AdminMember1 | undefined) {
        this._event = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "endDateTime": n => { this.endDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "event": n => { this.event = n.getObjectValue<Event>(createEventFromDiscriminatorValue); },
            "isAllDay": n => { this.isAllDay = n.getBooleanValue(); },
            "isDelegated": n => { this.isDelegated = n.getBooleanValue(); },
            "isOutOfDate": n => { this.isOutOfDate = n.getBooleanValue(); },
            "location": n => { this.location = n.getObjectValue<Location>(createLocationFromDiscriminatorValue); },
            "meetingMessageType": n => { this.meetingMessageType = n.getObjectValue<MeetingMessageType>(createMeetingMessageTypeFromDiscriminatorValue); },
            "recurrence": n => { this.recurrence = n.getObjectValue<PatternedRecurrence>(createPatternedRecurrenceFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the isAllDay property value. The isAllDay property
     * @returns a boolean
     */
    public get isAllDay() {
        return this._isAllDay;
    };
    /**
     * Sets the isAllDay property value. The isAllDay property
     * @param value Value to set for the isAllDay property.
     */
    public set isAllDay(value: boolean | undefined) {
        this._isAllDay = value;
    };
    /**
     * Gets the isDelegated property value. The isDelegated property
     * @returns a boolean
     */
    public get isDelegated() {
        return this._isDelegated;
    };
    /**
     * Sets the isDelegated property value. The isDelegated property
     * @param value Value to set for the isDelegated property.
     */
    public set isDelegated(value: boolean | undefined) {
        this._isDelegated = value;
    };
    /**
     * Gets the isOutOfDate property value. The isOutOfDate property
     * @returns a boolean
     */
    public get isOutOfDate() {
        return this._isOutOfDate;
    };
    /**
     * Sets the isOutOfDate property value. The isOutOfDate property
     * @param value Value to set for the isOutOfDate property.
     */
    public set isOutOfDate(value: boolean | undefined) {
        this._isOutOfDate = value;
    };
    /**
     * Gets the location property value. The location property
     * @returns a admin
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. The location property
     * @param value Value to set for the location property.
     */
    public set location(value: Location | AdminMember1 | undefined) {
        this._location = value;
    };
    /**
     * Gets the meetingMessageType property value. The meetingMessageType property
     * @returns a admin
     */
    public get meetingMessageType() {
        return this._meetingMessageType;
    };
    /**
     * Sets the meetingMessageType property value. The meetingMessageType property
     * @param value Value to set for the meetingMessageType property.
     */
    public set meetingMessageType(value: MeetingMessageType | AdminMember1 | undefined) {
        this._meetingMessageType = value;
    };
    /**
     * Gets the recurrence property value. The recurrence property
     * @returns a admin
     */
    public get recurrence() {
        return this._recurrence;
    };
    /**
     * Sets the recurrence property value. The recurrence property
     * @param value Value to set for the recurrence property.
     */
    public set recurrence(value: PatternedRecurrence | AdminMember1 | undefined) {
        this._recurrence = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeObjectValue<DateTimeTimeZone>("endDateTime", this.endDateTime);
        writer.writeObjectValue<Event>("event", this.event);
        writer.writeBooleanValue("isAllDay", this.isAllDay);
        writer.writeBooleanValue("isDelegated", this.isDelegated);
        writer.writeBooleanValue("isOutOfDate", this.isOutOfDate);
        writer.writeObjectValue<Location>("location", this.location);
        writer.writeObjectValue<MeetingMessageType>("meetingMessageType", this.meetingMessageType);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", this.recurrence);
        writer.writeObjectValue<DateTimeTimeZone>("startDateTime", this.startDateTime);
    };
    /**
     * Gets the startDateTime property value. The startDateTime property
     * @returns a admin
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The startDateTime property
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: DateTimeTimeZone | AdminMember1 | undefined) {
        this._startDateTime = value;
    };
}
