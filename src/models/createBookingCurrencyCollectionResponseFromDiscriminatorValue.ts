import {deserializeIntoBookingCurrencyCollectionResponse} from './deserializeIntoBookingCurrencyCollectionResponse';
import {BookingCurrencyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBookingCurrencyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBookingCurrencyCollectionResponse;
}
