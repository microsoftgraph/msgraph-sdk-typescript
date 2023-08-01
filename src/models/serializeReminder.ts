import type {DateTimeTimeZone} from './dateTimeTimeZone';
import type {Location} from './location';
import type {Reminder} from './reminder';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeLocation} from './serializeLocation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeReminder(writer: SerializationWriter, reminder: Reminder | undefined = {} as Reminder) : void {
        writer.writeStringValue("changeKey", reminder.changeKey);
        writer.writeObjectValue<DateTimeTimeZone>("eventEndTime", reminder.eventEndTime, serializeDateTimeTimeZone);
        writer.writeStringValue("eventId", reminder.eventId);
        writer.writeObjectValue<Location>("eventLocation", reminder.eventLocation, serializeLocation);
        writer.writeObjectValue<DateTimeTimeZone>("eventStartTime", reminder.eventStartTime, serializeDateTimeTimeZone);
        writer.writeStringValue("eventSubject", reminder.eventSubject);
        writer.writeStringValue("eventWebLink", reminder.eventWebLink);
        writer.writeStringValue("@odata.type", reminder.odataType);
        writer.writeObjectValue<DateTimeTimeZone>("reminderFireTime", reminder.reminderFireTime, serializeDateTimeTimeZone);
        writer.writeAdditionalData(reminder.additionalData);
}
