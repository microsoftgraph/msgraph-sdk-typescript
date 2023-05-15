import {DateTimeTimeZone} from './dateTimeTimeZone';
import {Event} from './event';
import {EventMessage} from './eventMessage';
import {EventType} from './eventType';
import {Location} from './location';
import {MeetingMessageType} from './meetingMessageType';
import {PatternedRecurrence} from './patternedRecurrence';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeEvent} from './serializeEvent';
import {serializeLocation} from './serializeLocation';
import {serializeMessage} from './serializeMessage';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEventMessage(writer: SerializationWriter, eventMessage: EventMessage | undefined = {} as EventMessage) : void {
        serializeMessage(writer, eventMessage)
        writer.writeObjectValue<DateTimeTimeZone>("endDateTime", eventMessage.endDateTime, serializeDateTimeTimeZone);
        writer.writeObjectValue<Event>("event", eventMessage.event, serializeEvent);
        writer.writeBooleanValue("isAllDay", eventMessage.isAllDay);
        writer.writeBooleanValue("isDelegated", eventMessage.isDelegated);
        writer.writeBooleanValue("isOutOfDate", eventMessage.isOutOfDate);
        writer.writeObjectValue<Location>("location", eventMessage.location, serializeLocation);
        writer.writeEnumValue<MeetingMessageType>("meetingMessageType", eventMessage.meetingMessageType);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", eventMessage.recurrence, serializePatternedRecurrence);
        writer.writeObjectValue<DateTimeTimeZone>("startDateTime", eventMessage.startDateTime, serializeDateTimeTimeZone);
        writer.writeEnumValue<EventType>("type", eventMessage.type);
}
