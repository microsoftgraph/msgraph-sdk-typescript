import { deserializeIntoBookingServiceCollectionResponse } from './deserializeIntoBookingServiceCollectionResponse';
import { type BookingServiceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBookingServiceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingServiceCollectionResponse;
}
