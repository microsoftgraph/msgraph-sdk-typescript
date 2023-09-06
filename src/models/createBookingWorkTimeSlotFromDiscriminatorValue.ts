import { deserializeIntoBookingWorkTimeSlot } from './deserializeIntoBookingWorkTimeSlot';
import { type BookingWorkTimeSlot } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBookingWorkTimeSlotFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingWorkTimeSlot;
}
