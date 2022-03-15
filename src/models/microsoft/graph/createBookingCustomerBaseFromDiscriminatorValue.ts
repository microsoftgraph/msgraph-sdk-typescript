import {BookingCustomerBase} from './bookingCustomerBase';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomerBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCustomerBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCustomerBase();
}
