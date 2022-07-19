import {BookingCustomer} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomerFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCustomer {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCustomer();
}
