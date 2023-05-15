import {deserializeIntoBookingCustomerInformation} from './deserializeIntoBookingCustomerInformation';
import {BookingCustomerInformation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomerInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingCustomerInformation;
}
