import {deserializeIntoBookingBusinessCollectionResponse} from './deserializeIntoBookingBusinessCollectionResponse';
import {BookingBusinessCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingBusinessCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingBusinessCollectionResponse;
}
