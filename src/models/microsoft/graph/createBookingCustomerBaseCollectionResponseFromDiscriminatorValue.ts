import {BookingCustomerBaseCollectionResponse} from './bookingCustomerBaseCollectionResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomerBaseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCustomerBaseCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCustomerBaseCollectionResponse();
}
