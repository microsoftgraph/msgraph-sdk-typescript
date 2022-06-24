import {BookingCustomerImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomerFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCustomerImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCustomerImpl();
}
