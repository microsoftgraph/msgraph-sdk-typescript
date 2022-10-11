import {BookingCustomerInformationBaseCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomerInformationBaseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCustomerInformationBaseCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCustomerInformationBaseCollectionResponse();
}
