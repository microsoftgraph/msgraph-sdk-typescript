import {deserializeIntoBookingServiceCollectionResponse} from './deserializeIntoBookingServiceCollectionResponse';
import {BookingServiceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingServiceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingServiceCollectionResponse;
}
