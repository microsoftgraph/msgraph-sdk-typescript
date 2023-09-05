import { deserializeIntoBookingCustomer } from './deserializeIntoBookingCustomer';
import { type BookingCustomer } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBookingCustomerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingCustomer;
}
