import { deserializeIntoBookingCustomerBaseCollectionResponse } from './deserializeIntoBookingCustomerBaseCollectionResponse';
import { type BookingCustomerBaseCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBookingCustomerBaseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingCustomerBaseCollectionResponse;
}
