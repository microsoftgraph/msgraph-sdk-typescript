import {BookingBusinessCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingBusinessCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingBusinessCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingBusinessCollectionResponseImpl();
}
