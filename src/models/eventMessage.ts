import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createEventFromDiscriminatorValue} from './createEventFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {EventType} from './eventType';
import {DateTimeTimeZone, Event, Location, Message, PatternedRecurrence} from './index';
import {MeetingMessageType} from './meetingMessageType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EventMessage extends Message implements Parsable {
    private _endDateTime?: DateTimeTimeZone | undefined;
    /** The event associated with the event message. The assumption for attendees or room resources is that the Calendar Attendant is set to automatically update the calendar with an event when meeting request event messages arrive. Navigation property.  Read-only. */
    private _event?: Event | undefined;
    private _isAllDay?: boolean | undefined;
    private _isDelegated?: boolean | undefined;
    private _isOutOfDate?: boolean | undefined;
    private _location?: Location | undefined;
    private _meetingMessageType?: MeetingMessageType | undefined;
    private _recurrence?: PatternedRecurrence | undefined;
    private _startDateTime?: DateTimeTimeZone | undefined;
    private _type?: EventType | undefined;
    /**
     * Instantiates a new EventMessage and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.eventMessage";
    };
    /**
     * Gets the endDateTime property value. 
     * @returns a dateTimeTimeZone
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. 
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: DateTimeTimeZone | undefined) {
        this._endDateTime = value;
    };
    /**
     * Gets the event property value. The event associated with the event message. The assumption for attendees or room resources is that the Calendar Attendant is set to automatically update the calendar with an event when meeting request event messages arrive. Navigation property.  Read-only.
     * @returns a event
     */
    public get event() {
        return this._event;
    };
    /**
     * Sets the event property value. The event associated with the event message. The assumption for attendees or room resources is that the Calendar Attendant is set to automatically update the calendar with an event when meeting request event messages arrive. Navigation property.  Read-only.
     * @param value Value to set for the event property.
     */
    public set event(value: Event | undefined) {
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
            "meetingMessageType": n => { this.meetingMessageType = n.getEnumValue<MeetingMessageType>(MeetingMessageType); },
            "recurrence": n => { this.recurrence = n.getObjectValue<PatternedRecurrence>(createPatternedRecurrenceFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "type": n => { this.type = n.getEnumValue<EventType>(EventType); },
        };
    };
    /**
     * Gets the isAllDay property value. 
     * @returns a boolean
     */
    public get isAllDay() {
        return this._isAllDay;
    };
    /**
     * Sets the isAllDay property value. 
     * @param value Value to set for the isAllDay property.
     */
    public set isAllDay(value: boolean | undefined) {
        this._isAllDay = value;
    };
    /**
     * Gets the isDelegated property value. 
     * @returns a boolean
     */
    public get isDelegated() {
        return this._isDelegated;
    };
    /**
     * Sets the isDelegated property value. 
     * @param value Value to set for the isDelegated property.
     */
    public set isDelegated(value: boolean | undefined) {
        this._isDelegated = value;
    };
    /**
     * Gets the isOutOfDate property value. 
     * @returns a boolean
     */
    public get isOutOfDate() {
        return this._isOutOfDate;
    };
    /**
     * Sets the isOutOfDate property value. 
     * @param value Value to set for the isOutOfDate property.
     */
    public set isOutOfDate(value: boolean | undefined) {
        this._isOutOfDate = value;
    };
    /**
     * Gets the location property value. 
     * @returns a location
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. 
     * @param value Value to set for the location property.
     */
    public set location(value: Location | undefined) {
        this._location = value;
    };
    /**
     * Gets the meetingMessageType property value. 
     * @returns a meetingMessageType
     */
    public get meetingMessageType() {
        return this._meetingMessageType;
    };
    /**
     * Sets the meetingMessageType property value. 
     * @param value Value to set for the meetingMessageType property.
     */
    public set meetingMessageType(value: MeetingMessageType | undefined) {
        this._meetingMessageType = value;
    };
    /**
     * Gets the recurrence property value. 
     * @returns a patternedRecurrence
     */
    public get recurrence() {
        return this._recurrence;
    };
    /**
     * Sets the recurrence property value. 
     * @param value Value to set for the recurrence property.
     */
    public set recurrence(value: PatternedRecurrence | undefined) {
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
        writer.writeEnumValue<MeetingMessageType>("meetingMessageType", this.meetingMessageType);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", this.recurrence);
        writer.writeObjectValue<DateTimeTimeZone>("startDateTime", this.startDateTime);
        writer.writeEnumValue<EventType>("type", this.type);
    };
    /**
     * Gets the startDateTime property value. 
     * @returns a dateTimeTimeZone
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. 
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: DateTimeTimeZone | undefined) {
        this._startDateTime = value;
    };
    /**
     * Gets the type property value. 
     * @returns a eventType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: EventType | undefined) {
        this._type = value;
    };
}
