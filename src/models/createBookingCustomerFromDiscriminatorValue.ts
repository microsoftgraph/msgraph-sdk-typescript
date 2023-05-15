import {deserializeIntoBookingCustomer} from './deserializeIntoBookingCustomer';
import {BookingCustomer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingCustomer;
}
