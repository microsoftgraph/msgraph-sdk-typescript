import {deserializeIntoBookingReminder} from './deserializeIntoBookingReminder';
import {BookingReminder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingReminderFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingReminder;
}
