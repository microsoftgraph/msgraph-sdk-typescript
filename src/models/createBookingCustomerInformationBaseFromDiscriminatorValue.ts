import {BookingCustomerInformationBaseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomerInformationBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCustomerInformationBaseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCustomerInformationBaseImpl();
}
