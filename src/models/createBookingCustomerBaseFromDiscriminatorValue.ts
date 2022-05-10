import {BookingCustomerBaseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomerBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCustomerBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCustomerBaseImpl();
}
