import {deserializeIntoBookingCustomerBaseCollectionResponse} from './deserializeIntoBookingCustomerBaseCollectionResponse';
import {BookingCustomerBaseCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomerBaseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingCustomerBaseCollectionResponse;
}
