import {BookingCustomerInformation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomerInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCustomerInformation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCustomerInformation();
}
