import {createDateTimeTimeZoneFromDiscriminatorValue} from './createDateTimeTimeZoneFromDiscriminatorValue';
import {createLocationFromDiscriminatorValue} from './createLocationFromDiscriminatorValue';
import {DateTimeTimeZone} from './dateTimeTimeZone';
import {Location} from './location';
import {Reminder} from './reminder';
import {serializeDateTimeTimeZone} from './serializeDateTimeTimeZone';
import {serializeLocation} from './serializeLocation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
