import {BookingWorkTimeSlot} from './bookingWorkTimeSlot';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingWorkTimeSlotFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingWorkTimeSlot {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingWorkTimeSlot();
}
