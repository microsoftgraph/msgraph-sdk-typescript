import {BookingCustomerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCustomerCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCustomerCollectionResponse();
}
