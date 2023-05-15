import {BookingReminder} from './bookingReminder';
import {BookingReminderRecipients} from './bookingReminderRecipients';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBookingReminder(writer: SerializationWriter, bookingReminder: BookingReminder | undefined = {} as BookingReminder) : void {
        writer.writeStringValue("message", bookingReminder.message);
        writer.writeStringValue("@odata.type", bookingReminder.odataType);
        writer.writeDurationValue("offset", bookingReminder.offset);
        writer.writeEnumValue<BookingReminderRecipients>("recipients", bookingReminder.recipients);
        writer.writeAdditionalData(bookingReminder.additionalData);
}
