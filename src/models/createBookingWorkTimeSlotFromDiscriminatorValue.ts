import {BookingWorkTimeSlotImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingWorkTimeSlotFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingWorkTimeSlotImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingWorkTimeSlotImpl();
}
