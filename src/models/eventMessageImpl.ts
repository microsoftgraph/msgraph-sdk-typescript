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
    public endDateTime?: DateTimeTimeZone | undefined;
    /** The event associated with the event message. The assumption for attendees or room resources is that the Calendar Attendant is set to automatically update the calendar with an event when meeting request event messages arrive. Navigation property.  Read-only. */
    public event?: Event | undefined;
    /** The isAllDay property */
    public isAllDay?: boolean | undefined;
    /** The isDelegated property */
    public isDelegated?: boolean | undefined;
    /** The isOutOfDate property */
    public isOutOfDate?: boolean | undefined;
    /** The location property */
    public location?: Location | undefined;
    /** The meetingMessageType property */
    public meetingMessageType?: MeetingMessageType | undefined;
    /** The recurrence property */
    public recurrence?: PatternedRecurrence | undefined;
    /** The startDateTime property */
    public startDateTime?: DateTimeTimeZone | undefined;
    /** The type property */
    public type?: EventType | undefined;
    /**
     * Instantiates a new EventMessage and sets the default values.
     * @param eventMessageParameterValue 
     */
    public constructor(eventMessageParameterValue?: EventMessage | undefined) {
        super(eventMessageParameterValue);
        this.endDateTime = eventMessageParameterValue?.endDateTime;
        this.event = eventMessageParameterValue?.event;
        this.isAllDay = eventMessageParameterValue?.isAllDay;
        this.isDelegated = eventMessageParameterValue?.isDelegated;
        this.isOutOfDate = eventMessageParameterValue?.isOutOfDate;
        this.location = eventMessageParameterValue?.location;
        this.meetingMessageType = eventMessageParameterValue?.meetingMessageType;
        this.recurrence = eventMessageParameterValue?.recurrence;
        this.startDateTime = eventMessageParameterValue?.startDateTime;
        this.type = eventMessageParameterValue?.type;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.endDateTime){
            writer.writeObjectValue<DateTimeTimeZoneImpl>("endDateTime", new DateTimeTimeZoneImpl(this.endDateTime));
        }
        if(this.event){
            writer.writeObjectValue<EventImpl>("event", new EventImpl(this.event));
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
            writer.writeObjectValue<LocationImpl>("location", new LocationImpl(this.location));
        }
        if(this.meetingMessageType){
            writer.writeEnumValue<MeetingMessageType>("meetingMessageType", this.meetingMessageType);
        }
        if(this.recurrence){
            writer.writeObjectValue<PatternedRecurrenceImpl>("recurrence", new PatternedRecurrenceImpl(this.recurrence));
        }
        if(this.startDateTime){
            writer.writeObjectValue<DateTimeTimeZoneImpl>("startDateTime", new DateTimeTimeZoneImpl(this.startDateTime));
        }
        if(this.type){
            writer.writeEnumValue<EventType>("type", this.type);
        }
    };
}
