import {BookingCustomerBaseCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCustomerBaseCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCustomerBaseCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCustomerBaseCollectionResponseImpl();
}
