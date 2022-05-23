import {BookingReminderImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingReminderFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingReminderImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingReminderImpl();
}
