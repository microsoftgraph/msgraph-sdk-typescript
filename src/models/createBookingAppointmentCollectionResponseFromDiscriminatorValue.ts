import {BookingAppointmentCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingAppointmentCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingAppointmentCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingAppointmentCollectionResponseImpl();
}
