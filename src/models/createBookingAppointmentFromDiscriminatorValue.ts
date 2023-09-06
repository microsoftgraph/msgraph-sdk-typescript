import { deserializeIntoBookingAppointment } from './deserializeIntoBookingAppointment';
import { type BookingAppointment } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBookingAppointmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingAppointment;
}
