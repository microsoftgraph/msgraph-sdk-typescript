import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createEventFromDiscriminatorValue} from './createEventFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {Event} from './event';
import {EventMessage} from './eventMessage';
import {EventType} from './eventType';
import {DateTimeTimeZoneImpl, EventImpl, LocationImpl, MessageImpl, PatternedRecurrenceImpl} from './index';
import {Location} from './location';
import {MeetingMessageType} from './meetingMessageType';
import {PatternedRecurrence} from './patternedRecurrence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EventMessageImpl extends MessageImpl implements EventMessage {
    /** The end time of the requested meeting. */
    private _endDateTime?: DateTimeTimeZone | undefined;
    /** The event associated with the event message. The assumption for attendees or room resources is that the Calendar Attendant is set to automatically update the calendar with an event when meeting request event messages arrive. Navigation property.  Read-only. */
    private _event?: Event | undefined;
    /** The isAllDay property */
    private _isAllDay?: boolean | undefined;
    /** The isDelegated property */
    private _isDelegated?: boolean | undefined;
    /** The isOutOfDate property */
    private _isOutOfDate?: boolean | undefined;
    /** The location property */
    private _location?: Location | undefined;
    /** The meetingMessageType property */
    private _meetingMessageType?: MeetingMessageType | undefined;
    /** The recurrence property */
    private _recurrence?: PatternedRecurrence | undefined;
    /** The startDateTime property */
    private _startDateTime?: DateTimeTimeZone | undefined;
    /** The type property */
    private _type?: EventType | undefined;
    /**
     * Instantiates a new EventMessage and sets the default values.
     * @param eventMessageParameterValue 
     */
    public constructor(eventMessageParameterValue?: EventMessage | undefined) {
        super(eventMessageParameterValue);
        this._endDateTime = eventMessageParameterValue?.endDateTime;
        this._event = eventMessageParameterValue?.event;
        this._isAllDay = eventMessageParameterValue?.isAllDay;
        this._isDelegated = eventMessageParameterValue?.isDelegated;
        this._isOutOfDate = eventMessageParameterValue?.isOutOfDate;
        this._location = eventMessageParameterValue?.location;
        this._meetingMessageType = eventMessageParameterValue?.meetingMessageType;
        this._recurrence = eventMessageParameterValue?.recurrence;
        this._startDateTime = eventMessageParameterValue?.startDateTime;
        this._type = eventMessageParameterValue?.type;
    };
    /**
     * Gets the endDateTime property value. The end time of the requested meeting.
     * @returns a DateTimeTimeZoneInterface
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. The end time of the requested meeting.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: DateTimeTimeZone | undefined) {
        if(value) {
            this._endDateTime = value instanceof DateTimeTimeZoneImpl? value as DateTimeTimeZoneImpl: new DateTimeTimeZoneImpl(value);
        }
    };
    /**
     * Gets the event property value. The event associated with the event message. The assumption for attendees or room resources is that the Calendar Attendant is set to automatically update the calendar with an event when meeting request event messages arrive. Navigation property.  Read-only.
     * @returns a EventInterface
     */
    public get event() {
        return this._event;
    };
    /**
     * Sets the event property value. The event associated with the event message. The assumption for attendees or room resources is that the Calendar Attendant is set to automatically update the calendar with an event when meeting request event messages arrive. Navigation property.  Read-only.
     * @param value Value to set for the event property.
     */
    public set event(value: Event | undefined) {
        if(value) {
            this._event = value instanceof EventImpl? value as EventImpl: new EventImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "endDateTime": n => { this.endDateTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "event": n => { this.event = n.getObjectValue<EventImpl>(createEventFromDiscriminatorValue); },
            "isAllDay": n => { this.isAllDay = n.getBooleanValue(); },
            "isDelegated": n => { this.isDelegated = n.getBooleanValue(); },
            "isOutOfDate": n => { this.isOutOfDate = n.getBooleanValue(); },
            "location": n => { this.location = n.getObjectValue<LocationImpl>(createLocationFromDiscriminatorValue); },
            "meetingMessageType": n => { this.meetingMessageType = n.getEnumValue<MeetingMessageType>(MeetingMessageType); },
            "recurrence": n => { this.recurrence = n.getObjectValue<PatternedRecurrenceImpl>(createPatternedRecurrenceFromDiscriminatorValue); },
            "startDateTime": n => { this.startDateTime = n.getObjectValue<DateTimeTimeZoneImpl>(createDateTimeTimeZoneFromDiscriminatorValue); },
            "type": n => { this.type = n.getEnumValue<EventType>(EventType); },
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
        if(value) {
            this._isAllDay = value;
        }
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
        if(value) {
            this._isDelegated = value;
        }
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
        if(value) {
            this._isOutOfDate = value;
        }
    };
    /**
     * Gets the location property value. The location property
     * @returns a LocationInterface
     */
    public get location() {
        return this._location;
    };
    /**
     * Sets the location property value. The location property
     * @param value Value to set for the location property.
     */
    public set location(value: Location | undefined) {
        if(value) {
            this._location = value instanceof LocationImpl? value as LocationImpl: new LocationImpl(value);
        }
    };
    /**
     * Gets the meetingMessageType property value. The meetingMessageType property
     * @returns a meetingMessageType
     */
    public get meetingMessageType() {
        return this._meetingMessageType;
    };
    /**
     * Sets the meetingMessageType property value. The meetingMessageType property
     * @param value Value to set for the meetingMessageType property.
     */
    public set meetingMessageType(value: MeetingMessageType | undefined) {
        if(value) {
            this._meetingMessageType = value;
        }
    };
    /**
     * Gets the recurrence property value. The recurrence property
     * @returns a PatternedRecurrenceInterface
     */
    public get recurrence() {
        return this._recurrence;
    };
    /**
     * Sets the recurrence property value. The recurrence property
     * @param value Value to set for the recurrence property.
     */
    public set recurrence(value: PatternedRecurrence | undefined) {
        if(value) {
            this._recurrence = value instanceof PatternedRecurrenceImpl? value as PatternedRecurrenceImpl: new PatternedRecurrenceImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.endDateTime){
            writer.writeObjectValue<DateTimeTimeZoneImpl>("endDateTime", (this.endDateTime instanceof DateTimeTimeZoneImpl? this.endDateTime as DateTimeTimeZoneImpl: new DateTimeTimeZoneImpl(this.endDateTime)));
        }
        if(this.event){
            writer.writeObjectValue<EventImpl>("event", (this.event instanceof EventImpl? this.event as EventImpl: new EventImpl(this.event)));
        }
        if(this.isAllDay){
            writer.writeBooleanValue("isAllDay", this.isAllDay);
        }
        if(this.isDelegated){
            writer.writeBooleanValue("isDelegated", this.isDelegated);
        }
        if(this.isOutOfDate){
            writer.writeBooleanValue("isOutOfDate", this.isOutOfDate);
        }
        if(this.location){
            writer.writeObjectValue<LocationImpl>("location", (this.location instanceof LocationImpl? this.location as LocationImpl: new LocationImpl(this.location)));
        }
        if(this.meetingMessageType){
            writer.writeEnumValue<MeetingMessageType>("meetingMessageType", this.meetingMessageType);
        }
        if(this.recurrence){
            writer.writeObjectValue<PatternedRecurrenceImpl>("recurrence", (this.recurrence instanceof PatternedRecurrenceImpl? this.recurrence as PatternedRecurrenceImpl: new PatternedRecurrenceImpl(this.recurrence)));
        }
        if(this.startDateTime){
            writer.writeObjectValue<DateTimeTimeZoneImpl>("startDateTime", (this.startDateTime instanceof DateTimeTimeZoneImpl? this.startDateTime as DateTimeTimeZoneImpl: new DateTimeTimeZoneImpl(this.startDateTime)));
        }
        if(this.type){
            writer.writeEnumValue<EventType>("type", this.type);
        }
    };
    /**
     * Gets the startDateTime property value. The startDateTime property
     * @returns a DateTimeTimeZoneInterface
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The startDateTime property
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: DateTimeTimeZone | undefined) {
        if(value) {
            this._startDateTime = value instanceof DateTimeTimeZoneImpl? value as DateTimeTimeZoneImpl: new DateTimeTimeZoneImpl(value);
        }
    };
    /**
     * Gets the type property value. The type property
     * @returns a eventType
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. The type property
     * @param value Value to set for the type property.
     */
    public set type(value: EventType | undefined) {
        if(value) {
            this._type = value;
        }
    };
}
