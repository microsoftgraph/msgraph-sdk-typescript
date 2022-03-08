import {BookingReminder} from './bookingReminder';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingReminderFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingReminder {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingReminder();
}
