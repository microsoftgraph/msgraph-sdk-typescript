import { deserializeIntoBookingAppointmentCollectionResponse } from './deserializeIntoBookingAppointmentCollectionResponse';
import { type BookingAppointmentCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBookingAppointmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingAppointmentCollectionResponse;
}
