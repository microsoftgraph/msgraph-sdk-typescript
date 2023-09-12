import { createDateTimeTimeZoneFromDiscriminatorValue } from './createDateTimeTimeZoneFromDiscriminatorValue';
import { createLocationFromDiscriminatorValue } from './createLocationFromDiscriminatorValue';
import { type DateTimeTimeZone } from './dateTimeTimeZone';
import { type Location } from './location';
import { type Reminder } from './reminder';
import { serializeDateTimeTimeZone } from './serializeDateTimeTimeZone';
import { serializeLocation } from './serializeLocation';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoReminder(reminder: Reminder | undefined = {} as Reminder) : Record<string, (node: ParseNode) => void> {
    return {
        "changeKey": n => { reminder.changeKey = n.getStringValue(); },
        "eventEndTime": n => { reminder.eventEndTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "eventId": n => { reminder.eventId = n.getStringValue(); },
        "eventLocation": n => { reminder.eventLocation = n.getObjectValue<Location>(createLocationFromDiscriminatorValue); },
        "eventStartTime": n => { reminder.eventStartTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
        "eventSubject": n => { reminder.eventSubject = n.getStringValue(); },
        "eventWebLink": n => { reminder.eventWebLink = n.getStringValue(); },
        "@odata.type": n => { reminder.odataType = n.getStringValue(); },
        "reminderFireTime": n => { reminder.reminderFireTime = n.getObjectValue<DateTimeTimeZone>(createDateTimeTimeZoneFromDiscriminatorValue); },
    }
}
