import { deserializeIntoBookingWorkHours } from './deserializeIntoBookingWorkHours';
import { type BookingWorkHours } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBookingWorkHoursFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingWorkHours;
}
