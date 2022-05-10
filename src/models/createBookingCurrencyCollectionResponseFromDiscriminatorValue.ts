import {BookingCurrencyCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCurrencyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BookingCurrencyCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BookingCurrencyCollectionResponseImpl();
}
