import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createEventFromDiscriminatorValue} from './createEventFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {deserializeIntoMessage} from './deserializeIntoMessage';
import {Event} from './event';
import {EventMessage} from './eventMessage';
import {EventType} from './eventType';
import {Location} from './location';
import {MeetingMessageType} from './meetingMessageType';
import {PatternedRecurrence} from './patternedRecurrence';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeEvent} from './serializeEvent';
import {serializeLocation} from './serializeLocation';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEventMessage(eventMessage: EventMessage | undefined = {} as EventMessage) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMessage(eventMessage),
        "endDateTime": n => { eventMessage.endDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "event": n => { eventMessage.event = n.getObjectValue<Event>(createEventFromDiscriminatorValue); },
        "isAllDay": n => { eventMessage.isAllDay = n.getBooleanValue(); },
        "isDelegated": n => { eventMessage.isDelegated = n.getBooleanValue(); },
        "isOutOfDate": n => { eventMessage.isOutOfDate = n.getBooleanValue(); },
        "location": n => { eventMessage.location = n.getObjectValue<Location>(createLocationFromDiscriminatorValue); },
        "meetingMessageType": n => { eventMessage.meetingMessageType = n.getEnumValue<MeetingMessageType>(MeetingMessageType); },
        "recurrence": n => { eventMessage.recurrence = n.getObjectValue<PatternedRecurrence>(createPatternedRecurrenceFromDiscriminatorValue); },
        "startDateTime": n => { eventMessage.startDateTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "type": n => { eventMessage.type = n.getEnumValue<EventType>(EventType); },
    }
}
