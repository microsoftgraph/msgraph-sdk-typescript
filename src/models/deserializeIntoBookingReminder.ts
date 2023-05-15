import {BookingReminder} from './bookingReminder';
import {BookingReminderRecipients} from './bookingReminderRecipients';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBookingReminder(bookingReminder: BookingReminder | undefined = {} as BookingReminder) : Record<string, (node: ParseNode) => void> {
    return {
        "message": n => { bookingReminder.message = n.getStringValue(); },
        "@odata.type": n => { bookingReminder.odataType = n.getStringValue(); },
        "offset": n => { bookingReminder.offset = n.getDurationValue(); },
        "recipients": n => { bookingReminder.recipients = n.getEnumValue<BookingReminderRecipients>(BookingReminderRecipients); },
    }
}
