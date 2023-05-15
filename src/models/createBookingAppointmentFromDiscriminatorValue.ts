import {deserializeIntoBookingAppointment} from './deserializeIntoBookingAppointment';
import {BookingAppointment} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingAppointmentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingAppointment;
}
