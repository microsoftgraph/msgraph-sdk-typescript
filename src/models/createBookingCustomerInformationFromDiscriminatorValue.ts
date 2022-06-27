import {BookingCustomerInformationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomerInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCustomerInformationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCustomerInformationImpl();
}
